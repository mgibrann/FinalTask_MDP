import React, {useState} from 'react';
import {StyleSheet, Image, View, ScrollView, Text, LogBox} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Input, Gap, Button, Loading, Link} from '../../component';
import Firebase from '../../config';
import {colors, fonts, storeData} from '../../utils';
import {IconLogo} from '../../assets';
LogBox.ignoreLogs(['Setting a timer']);

const SignUp = ({navigation}) => {
  const [fullName, SetFullName] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [profession, SetProfession] = useState('');

  const [loading, SetLoading] = useState(false);

  const onContinue = () => {
    SetLoading(true);
    const data = {
      fullName: fullName,
      profession: profession,
      email: email,
    };

    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        Firebase.database().ref(`users/${res.user.uid}`).set(data);
        showMessage({
          message: 'Success',
          type: 'success',
        });
        SetLoading(false);
        storeData('user', data);
        navigation.replace('MainApp');
      })
      .catch((error) => {
        console.log('error', error);
        const errorMessage = error.message;
        showMessage({
          message: errorMessage,
          type: 'danger',
        });
        SetLoading(false);
      });
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            <Image
              source={IconLogo}
              style={{
                height: 80,
                width: 80,
                justifyContent: 'center',
              }}
            />
            <Text style={styles.title}>Create Your Account Account</Text>
          </View>
          <Gap height={20} />
          <Input
            text="Name"
            value={fullName}
            onChangeText={(value) => SetFullName(value)}
          />
          <Gap height={25} />
          <Input
            text="Profession"
            value={profession}
            onChangeText={(value) => SetProfession(value)}
          />
          <Gap height={25} />
          <Input
            text="Email"
            value={email}
            onChangeText={(value) => SetEmail(value)}
          />
          <Gap height={25} />
          <Input
            text="Password"
            value={password}
            onChangeText={(value) => SetPassword(value)}
            secureTextEntry
          />
          <Gap height={40} />
          <Button text="Continue" onPress={onContinue} />
          <Link
            text="Already Have an Account?"
            align="center"
            size={12}
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
        {loading && <Loading />}
      </ScrollView>
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 30,
    backgroundColor: colors.background,
    flex: 1,
    height: '100%',
  },
  title: {
    fontSize: 22,
    color: colors.dark,
    maxWidth: 205,
    fontFamily: fonts.primary[700],
    marginTop: 10,
  },
});
