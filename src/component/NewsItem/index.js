import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PS5} from '../../assets';
import {colors, fonts} from '../../utils';

const NewsItem = () => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.desc}>
          PS5 Release on 31 November 2020, In Indonesia
        </Text>
        <Text style={styles.date}>Today</Text>
      </View>
      <Image source={PS5} style={styles.image} />
    </TouchableOpacity>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  image: {width: 80, height: 60, borderRadius: 10},
  container: {flexDirection: 'column', flex: 1},
  wrapper: {
    flexDirection: 'row',
    marginTop: 8,
    backgroundColor: colors.white,
    padding: 4,
    borderRadius: 10,
  },
  desc: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
    maxWidth: 250,
  },
  date: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.text.secondary,
  },
});
