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
import {IconAddPhoto, NullPhoto} from '../../assets';
import {Button, Gap, Header, Input} from '../../component';
import Firebase from '../../config';
import {colors, fonts, getData} from '../../utils';

const EditProfile = ({navigation}) => {
  const [fullName, SetFullName] = useState();
  const [profession, SetProfession] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  useEffect(() => {
    getData('user').then((res) => {
      SetFullName(res.fullName);
      SetEmail(res.email);
      SetProfession(res.profession);
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
        console.log(res);
        navigation.replace('SignIn');
      })
      .catch((er) => {
        const errormessage = err.message;
        showMessage({
          message: errormessage,
          type: 'danger',
        });
      });
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="Edit Profile" />
        <View style={styles.page}>
          <View style={styles.container}>
            <TouchableOpacity style={styles.profile}>
              <Image source={NullPhoto} style={styles.avatar} />
              <Image source={IconAddPhoto} style={styles.addphoto} />
            </TouchableOpacity>
          </View>
          <View style={styles.wrap}>
            <Text style={styles.title}>Full Name</Text>
            <Text style={styles.desc}>{fullName}</Text>
          </View>
          <View style={styles.wrap}>
            <Text style={styles.title}>Profession</Text>
            <Text style={styles.desc}>{profession}</Text>
          </View>
          <View style={styles.wrap}>
            <Text style={styles.title}>Email</Text>
            <Text style={styles.desc}>{email}</Text>
          </View>
          <Gap height={40} />
          <Button text="Sign Out" onPress={onLogOut} />
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
  avatar: {width: 110, height: 110},
  addphoto: {height: 30, width: 30, position: 'absolute', right: 8, bottom: 8},
  title: {fontFamily: fonts.primary[700], fontSize: 16, color: colors.dark},
  desc: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: colors.blue,
    marginBottom: 5,
    marginTop: 5,
    textTransform: 'uppercase',
  },
  wrap: {borderBottomWidth: 1, borderColor: colors.border, marginBottom: 10},
});
