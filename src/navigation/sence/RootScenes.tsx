import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import navigationConfigs from '../config/options';
import {APP_ROUTE} from '../config/routes';
import MainTabContainer from './TabScenes';

export type RootStackParamList = Record<string, any>;

const MainStack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {
  return (
    <MainStack.Navigator screenOptions={navigationConfigs}>
      <MainStack.Screen
        name={APP_ROUTE.MAIN_TAB}
        component={MainTabContainer}
      />
    </MainStack.Navigator>
  );
};

const Root = () => {
  return <AppStack />;
};

export default Root;

const styles = StyleSheet.create({});
