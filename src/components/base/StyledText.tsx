import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// Props đầu vào: nội dung, style, ...
// Các thẻ sẽ dùng ở bên trong gồm những thẻ gì
// Các loại giá trị có thể truyền vào
// Style default
interface Props {
  value: string;
}

const StyledText = (props: Props) => {
  return <Text>{props.value}</Text>;
};

export default StyledText;

const styles = StyleSheet.create({});
