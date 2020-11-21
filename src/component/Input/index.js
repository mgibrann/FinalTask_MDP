import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors, fonts} from '../../utils';

const Input = ({text, value, disable, secureTextEntry, onChangeText}) => {
  const [border, SetBorder] = useState(colors.border);
  const onFocusForm = () => {
    SetBorder(colors.blue);
  };
  const onBlurForm = () => {
    SetBorder(colors.border);
  };
  return (
    <View>
      <Text style={styles.desc}>{text}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  desc: {
    fontSize: 15,
    color: colors.text.secondary,
    fontFamily: fonts.primary[600],
    marginBottom: 6,
  },
  input: (border) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
  }),
});
