import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import HomeScreen from '../../features/home/HomeScreen';

export type RootStackParamList = Record<string, any>;

const MainStack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="HomeScreen" component={HomeScreen} />
    </MainStack.Navigator>
  );
};

const Root = () => {
  return <AppStack />;
};

export default Root;

const styles = StyleSheet.create({});
