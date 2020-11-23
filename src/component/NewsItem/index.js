import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PS5} from '../../assets';
import {colors, fonts} from '../../utils';

const NewsItem = ({title, date, image}) => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.desc}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Image source={{uri: image}} style={styles.image} />
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
