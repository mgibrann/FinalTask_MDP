import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Gap, Header, Input} from '../../component';
import {colors} from '../../utils';

const AddPost = () => {
  return (
    <>
      <Header title="Add Burung" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          <Input text="Title" />
          <Gap height={20} />
          <Input text="Description" />
          <Gap height={20} />
          <Input text="date" />
          <Gap height={20} />
          <TouchableOpacity style={styles.addfile}>
            <Text style={styles.txt}>Add File</Text>
          </TouchableOpacity>
          <Gap height={40} />
          <Button text="Add Burung" />
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
