import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, fonts} from '../../utils';

const Link = ({text, align, size, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.desc(size, align)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  desc: (size, align) => ({
    fontFamily: fonts.primary[600],
    textDecorationLine: 'underline',
    marginTop: 10,
    fontSize: size,
    textAlign: align,
    color: colors.text.secondary,
  }),
});
