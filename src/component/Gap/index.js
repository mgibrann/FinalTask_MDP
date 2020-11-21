import React from 'react';
import {StyleSheet, View} from 'react-native';

const Gap = ({width, height}) => {
  return <View style={styles.container(width, height)} />;
};

export default Gap;

const styles = StyleSheet.create({
  container: (width, height) => ({
    width: width ? width : 0,
    height: height ? height : 0,
  }),
});
