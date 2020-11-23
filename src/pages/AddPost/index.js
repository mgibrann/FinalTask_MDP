import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Gap, Header, Input} from '../../component';
import Firebase from '../../config';
import {colors} from '../../utils';
import ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const AddPost = () => {
  const [title, SetTitle] = useState('');
  const [image, SetImage] = useState('');
  const [description, SetDescription] = useState('');
  const [date, SetDate] = useState('');
  const [id, SetId] = useState(0);
  const [filedesc, SetFileDesc] = useState('');

  const onAddPost = () => {
    Firebase.database()
      .ref('news/Added/' + id)
      .set({
        date: title,
        id: id,
        title: title,
        image: image,
      })
      .catch((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    showMessage({
      message: 'Success Add Burung',
      type: 'success',
    });
    SetId(id + 1);
  };

  const getImage = () => {
    ImagePicker.launchImageLibrary(
      {quality: 0.5, maxWidth: 200, maxHeight: 200},
      (response) => {
        const photoForDB = `data:${response.type};base64, ${response.data}`;
        SetFileDesc(response.fileName);
        SetImage(photoForDB);
      },
    );
  };

  return (
    <>
      <Header title="Add Burung" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          <Input
            text="Title"
            value={title}
            onChangeText={(value) => SetTitle(value)}
          />
          <Gap height={20} />
          <Input
            text="Description"
            value={description}
            onChangeText={(value) => SetDescription(value)}
          />
          <Gap height={20} />
          <Input
            text="date"
            value={date}
            onChangeText={(value) => SetDate(value)}
          />
          <Gap height={20} />
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
            }}>
            <TouchableOpacity style={styles.addfile} onPress={getImage}>
              <Text style={styles.txt}>Add File</Text>
            </TouchableOpacity>
            <Text style={styles.file}>{filedesc}</Text>
          </View>
          <Gap height={40} />
          <Button text="Add Burung" onPress={onAddPost} />
        </View>
      </ScrollView>
    </>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.background, padding: 20},
  addfile: {
    backgroundColor: colors.blue,
    borderRadius: 8,
    color: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 30,
  },
  file: {
    color: colors.text.secondary,
    fontSize: 12,
    maxWidth: 250,
    marginLeft: 10,
  },
  txt: {color: colors.white},
});
