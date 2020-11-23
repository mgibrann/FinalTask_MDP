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

const AddPost = () => {
  const [title, SetTitle] = useState('');
  const [image, SetImage] = useState('');
  const [description, SetDescription] = useState('');
  const [date, SetDate] = useState('');
  const [id, SetId] = useState(0);

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
    alert('k');
    SetId(id + 1);
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
          <TouchableOpacity style={styles.addfile}>
            <Text style={styles.txt}>Add File</Text>
          </TouchableOpacity>
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
    width: 60,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {color: colors.white},
});
