import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Input, Header, Gap, Button, Loading} from '../../component';
import Firebase from '../../config';
import {colors, storeData} from '../../utils';
import {LogBox} from 'react-native';
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
        <Header title="Sign Up" onPress={() => navigation.goBack()} />
        <View style={styles.container}>
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
});
