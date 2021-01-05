import React, {useState} from 'react';
import {useEffect} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Gibran, IconAddPhoto} from '../../assets';
import {Button, Gap, Header} from '../../component';
import Firebase from '../../config';
import {colors, fonts, getData} from '../../utils';
import ImagePicker from 'react-native-image-picker';

const EditProfile = ({navigation}) => {
  const [fullName, SetFullName] = useState();
  const [profession, SetProfession] = useState('');
  const [email, SetEmail] = useState('');
  const [image, SetImage] = useState(
    'https://lh3.googleusercontent.com/-oCS2G33ogSU/AAAAAAAAAAI/AAAAAAAAAAA/fntcdzg69Fk/s181-c/116225983760077661019.jpg',
  );
  const [nim, SetNim] = useState('');

  useEffect(() => {
    getData('user').then((res) => {
      SetFullName(res.fullName);
      SetEmail(res.email);
      SetProfession(res.profession);
      SetNim(res.nim);
    });
  }, []);

  const onLogOut = () => {
    Firebase.auth()
      .signOut()
      .then((res) => {
        showMessage({
          message: 'Succes Sign Out',
          type: 'success',
        });
        navigation.replace('SignIn');
      })
      .catch((err) => {
        const errormessage = err.message;
        showMessage({
          message: errormessage,
          type: 'danger',
        });
      });
  };

  const getImage = () => {
    ImagePicker.launchImageLibrary(
      {quality: 0.5, maxWidth: 200, maxHeight: 200},
      (response) => {
        SetImage(response.uri);
        // console.log(response);
      },
    );
  };

  return (
    <>
      <Header title="Praktikan" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          <View style={styles.container}>
            <TouchableOpacity style={styles.profile} onPress={getImage}>
              <Image source={Gibran} style={styles.avatar} />
              {/* <Image source={IconAddPhoto} style={styles.addphoto} /> */}
            </TouchableOpacity>
          </View>
          <View style={styles.wrap}>
            <Text style={styles.title}>Nama</Text>
            <Text style={styles.desc}>{fullName}</Text>
          </View>
          <View style={styles.wrap}>
            <Text style={styles.title}>NIM</Text>
            <Text style={styles.desc}>21120118130067</Text>
          </View>
          <View style={styles.wrap}>
            <Text style={styles.title}>Kelompok</Text>
            <Text style={styles.desc}>1</Text>
          </View>
          <Gap height={40} />
          <Button text="Sign Out" secondary onPress={onLogOut} />
        </View>
      </ScrollView>
    </>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 40,
    paddingTop: 10,
  },
  container: {alignItems: 'center', marginBottom: 20},
  profile: {
    justifyContent: 'center',
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
  addphoto: {height: 30, width: 30, position: 'absolute', right: 8, bottom: 8},
  title: {fontFamily: fonts.primary[700], fontSize: 16, color: colors.dark},
  desc: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: colors.blue,
    marginBottom: 5,
    marginTop: 5,
  },
  wrap: {borderBottomWidth: 1, borderColor: colors.border, marginBottom: 10},
});
