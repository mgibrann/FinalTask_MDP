import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../utils';
import IconOnly from './IconOnly';

const Button = ({text, icon, onPress}) => {
  if (icon) {
    return <IconOnly onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    color: colors.white,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  text: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: fonts.primary[600],
    fontSize: 18,
  },
});
