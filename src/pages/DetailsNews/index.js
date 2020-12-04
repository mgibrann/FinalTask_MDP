import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header} from '../../component';
import {colors, fonts} from '../../utils';

const DetailsNew = ({route, navigation}) => {
  const {title, date, image} = route.params;

  return (
    <>
      <Header title="Details News" btn onPress={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.page}>
          <Image source={{uri: image}} style={styles.img} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.desc}>
            {`\t Lorem Ipsum is`} simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text style={styles.desc}>
            {`\t it was`} popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
          </Text>
          <Text style={styles.desc}>
            {`\t Lorem Ipsum is`} simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default DetailsNew;

const styles = StyleSheet.create({
  page: {padding: 20, flex: 1, backgroundColor: colors.background},
  img: {width: '100%', height: 200, borderRadius: 20},
  title: {fontFamily: fonts.primary[800], color: colors.dark, fontSize: 22},
  date: {
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    fontSize: 16,
  },
  desc: {marginTop: 10, textAlign: 'justify', letterSpacing: 1, lineHeight: 20},
});
