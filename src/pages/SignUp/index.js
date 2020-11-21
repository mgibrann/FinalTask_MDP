import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Input, Header, Gap, Button} from '../../component';
import {colors} from '../../utils';

const SignUp = () => {
  const [fullName, SetFullName] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  return (
    <>
      <Header title="Sign Up" />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            text="Name"
            value={fullName}
            onChangeText={(value) => SetFullName(value)}
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
          <Button text="Continue" />
        </ScrollView>
      </View>
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
  },
});
