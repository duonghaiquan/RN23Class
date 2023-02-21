import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

interface Props {
  color?: string;
  id: string;
  selectedItem?: string;
  onCheck(id: string, isChecked: boolean): void;
}

const StyledCheckBox = (props: Props) => {
  const {color = 'gray'} = props;
  const [checked, setChecked] = useState(false);

  const toggleCheckBox = (v: boolean) => {
    setChecked(v);
    props.onCheck(props.id, checked);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => toggleCheckBox(!checked)}
        style={[
          styles.square,
          {backgroundColor: props.selectedItem === props.id ? color : 'white'},
        ]}
      />
      <Text>Remember login</Text>
    </View>
  );
};

export default StyledCheckBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  square: {
    width: 20,
    height: 20,
    backgroundColor: 'gray',
    borderColor: 'black',
    borderWidth: 1.5,
    marginRight: 10,
  },
});
