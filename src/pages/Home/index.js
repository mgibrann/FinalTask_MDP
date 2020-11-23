import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../component';
import NewsItem from '../../component/NewsItem';
import Firebase from '../../config';
import {colors, fonts} from '../../utils';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

const Home = ({navigation}) => {
  const [latestNews, SetlatestNews] = useState('');
  const [topNews, SetTopNews] = useState('');
  const [added, SetAdded] = useState('');

  useEffect(() => {
    Firebase.database()
      .ref('/news')
      .on('value', (snapshot) => {
        // .once('value').then(res).catch()
        // const latest = res.val().latest;
        // const top = res.val().top;
        // SetlatestNews(latest);
        // SetTopNews(top);
        // console.log('REALTIME lates', snapshot.val().latest);
        // console.log();
        const latest = snapshot.val().latest;
        const top = snapshot.val().top;
        const added = snapshot.val().Added;
        SetlatestNews(latest);
        SetTopNews(top);
        SetAdded(added);
      });
  }, []);

  const onClickDetails = (res) => {
    navigation.navigate('DetailsNews', res);
  };

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>NEWS Burung</Text>
        {added.length > 0
          ? added.map((res) => {
              return (
                <NewsItem
                  key={res.id}
                  title={res.title}
                  date={res.date}
                  image={res.image}
                  onPress={() => onClickDetails(res)}
                />
              );
            })
          : null}
        <Text style={styles.title}>Top Burung</Text>
        {topNews.length > 0
          ? topNews.map((res) => {
              return (
                <NewsItem
                  key={res.id}
                  title={res.title}
                  image={res.image}
                  date={res.date}
                  onPress={() => onClickDetails(res)}
                />
              );
            })
          : null}
        <Gap height={25} />
        <Text style={styles.title}>Latest Burung</Text>
        {latestNews.length > 0
          ? latestNews.map((res) => {
              return (
                <NewsItem
                  key={res.id}
                  title={res.title}
                  image={res.image}
                  date={res.date}
                  onPress={() => onClickDetails(res)}
                />
              );
            })
          : null}
        <Gap height={25} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.background, padding: 16},
  title: {fontFamily: fonts.primary[700], fontSize: 20, color: colors.blue},
});
