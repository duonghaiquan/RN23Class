import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StyledText from '../../components/base/StyledText';

const HomeScreen = ({route}: any) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <StyledText value={route.params?.userName || 'undefine'} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
