import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IconLogo} from '../../assets';
import {colors, fonts} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={IconLogo} style={{width: 100, height: 100}} />
      <Text style={styles.logo}>Kabar Burung</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  logo: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    color: colors.blue,
    marginTop: 5,
  },
});
