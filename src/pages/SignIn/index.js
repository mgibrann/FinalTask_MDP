import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../component';
import {colors, fonts} from '../../utils';

const SignIn = ({navigation}) => {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  return (
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
        <Link
          text="Forget My Password"
          align="left"
          size={12}
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
      <Gap height={40} />
      <View>
        <Button text="Sign In" />
        <Link
          text="Create New Account"
          align="center"
          size={12}
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
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
