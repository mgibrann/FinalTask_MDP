import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {IconAddPhoto, NullPhoto} from '../../assets';
import {Button, Gap, Header, Input} from '../../component';
import {colors} from '../../utils';

const EditProfile = () => {
  const [fullName, SetFullName] = useState('');
  const [profession, SetProfession] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  return (
    <>
      <Header title="Edit Profile" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          <View style={styles.container}>
            <TouchableOpacity style={styles.profile}>
              <Image source={NullPhoto} style={styles.avatar} />
              <Image source={IconAddPhoto} style={styles.addphoto} />
            </TouchableOpacity>
          </View>
          <Input
            text="Full Name"
            value={fullName}
            onChangeText={(value) => SetFullName(value)}
          />
          <Gap height={20} />
          <Input
            text="Profession"
            value={profession}
            onChangeText={(value) => SetProfession(value)}
          />
          <Gap height={20} />
          <Input
            text="Email"
            value={email}
            onChangeText={(value) => SetEmail(value)}
          />
          <Gap height={20} />
          <Input
            text="Password"
            value={password}
            onChangeText={(value) => SetPassword(value)}
            disable
            secureTextEntry
          />
          <Gap height={40} />
          <Button text="Update" />
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
});
