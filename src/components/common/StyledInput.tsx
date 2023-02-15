import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

interface Props {
  placeholderText?: string;
  customStyle?: StyleProp<ViewStyle>;
  label: string;
}

const StyledInput = (props: Props) => {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={[styles.textInput, props.customStyle]}
        placeholder={props.placeholderText}
      />
    </View>
  );
};

export default StyledInput;

const styles = StyleSheet.create({
  label: {
    marginBottom: 10,
  },
  textInput: {
    height: 50,
    backgroundColor: 'white',
    marginBottom: 10,

    shadowColor: '#71c1fe',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 9.51,

    elevation: 14,
  },
});
