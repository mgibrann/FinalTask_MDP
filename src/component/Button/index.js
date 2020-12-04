import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../utils';
import IconOnly from './IconOnly';

const Button = ({text, icon, onPress, secondary}) => {
  if (icon) {
    return <IconOnly onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.container(secondary)} onPress={onPress}>
      <Text style={styles.text(secondary)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (secondary) => ({
    backgroundColor: secondary ? colors.background : colors.blue,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderWidth: secondary ? 2 : 0,
    borderColor: secondary ? colors.blue : colors.background,
  }),
  text: (secondary) => ({
    textAlign: 'center',
    color: secondary ? colors.blue : colors.white,
    fontFamily: fonts.primary[600],
    fontSize: 18,
  }),
});
