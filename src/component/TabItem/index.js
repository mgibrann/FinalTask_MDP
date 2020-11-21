import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconNews,
  IconNewsActive,
  IconAdd,
  IconAddActive,
  IconProfile,
  IconProfileActive,
} from '../../assets';

import {colors, fonts} from '../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IconNewsActive /> : <IconNews />;
    }
    if (title === 'AddPost') {
      return active ? <IconAddActive /> : <IconAdd />;
    }
    if (title === 'EditProfile') {
      return active ? <IconProfileActive /> : <IconProfile />;
    }
    return <IconNews />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (active) => ({
    fontSize: 10,
    color: active ? colors.blue : colors.white,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
