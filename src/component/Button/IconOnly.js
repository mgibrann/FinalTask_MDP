import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {IconBack} from '../../assets';

const IconOnly = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={IconBack} style={{width: 24, height: 24}} />
    </TouchableOpacity>
  );
};

export default IconOnly;

const styles = StyleSheet.create({});
