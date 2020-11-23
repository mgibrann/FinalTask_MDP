import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {IconLogo} from '../../assets';
import {Button, Gap, Input, Link, Loading} from '../../component';
import Firebase from '../../config';
import {colors, fonts} from '../../utils';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

const SignIn = ({navigation}) => {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [loading, SetLoading] = useState(false);

  const onSignIn = () => {
    const data = {};

    SetLoading(true);
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        Firebase.database()
          .ref(`users/${res.user.uid}`)
          .once('value')
          .then((res) => {
            if (res.val()) {
              SetLoading(false);
            }
          })
          .catch((err) => {
            console.log(err);
          });

        navigation.replace('MainApp');
      })
      .catch((err) => {
        const erormessage = err.message;
        showMessage({
          message: erormessage,
          type: 'danger',
        });
        SetLoading(false);
      });
  };
  return (
    <>
      <View style={styles.page}>
        <View>
          <Image
            source={IconLogo}
            style={{
              height: 80,
              width: 80,
              justifyContent: 'center',
            }}
          />
          <Text style={styles.title}>Sign In to Your Account</Text>
        </View>
        <Gap height={30} />
        <View>
          <Input
            text="Email"
            value={email}
            onChangeText={(value) => SetEmail(value)}
          />
          <Gap height={20} />
          <Input
            text="Password"
            value={password}
            onChangeText={(value) => SetPassword(value)}
          />
          <Link text="Forget My Password" align="left" size={12} />
        </View>
        <Gap height={40} />
        <View>
          <Button text="Sign In" onPress={onSignIn} />
          <Link
            text="Create New Account"
            align="center"
            size={12}
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.background,
    flex: 1,
    padding: 40,
  },
  title: {
    fontSize: 22,
    color: colors.dark,
    maxWidth: 205,
    fontFamily: fonts.primary[700],
    marginTop: 10,
  },
});
