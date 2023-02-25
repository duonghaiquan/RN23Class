import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import StyledCheckBox from './StyledCheckBox';
import ItemRadioButton from './ItemRadioButton';

const StyledRadioButton = (props: any) => {
  const [group, setGroup] = useState(['Quyet', 'Thanh', 'Hung', 'Cuong']);

  const [selectedItem, setSelectedItem] = useState('Quyet');

  const handleSelect = (id: string, isCheck: boolean) => {
    // nhaanj duoc tham so ben trong gui ra
    setSelectedItem(id);
  };

  return (
    <View style={{marginTop: 10}}>
      <ItemRadioButton
        id={'Quyet'}
        selectedItem={selectedItem}
        onCheck={handleSelect}
      />
      <ItemRadioButton
        id={'Thanh'}
        selectedItem={selectedItem}
        onCheck={handleSelect}
      />
    </View>
  );
};

export default StyledRadioButton;

const styles = StyleSheet.create({});
