import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../component';
import NewsItem from '../../component/NewsItem';
import {colors, fonts} from '../../utils';

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Top Burung</Text>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <Gap height={25} />
        <Text style={styles.title}>Latest Burung</Text>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <Gap height={25} />
        <Text style={styles.title}>Wanted Burung</Text>
        <NewsItem />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.background, padding: 16},
  title: {fontFamily: fonts.primary[700], fontSize: 20, color: colors.blue},
});
