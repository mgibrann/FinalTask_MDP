import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '..';
import {colors, fonts} from '../../utils';

const Header = ({title, onPress, btn}) => {
  return (
    <View style={styles.container}>
      {btn && <Button icon onPress={onPress} />}
      <Text style={styles.txt}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  txt: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    lineHeight: 27,
    color: colors.white,
    textAlign: 'center',
    flex: 1,
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: colors.blue,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
