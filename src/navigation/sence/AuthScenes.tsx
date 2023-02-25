import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import RegisterScreen from '../../features/authenticate/RegisterScreen';
import navigationConfigs from '../config/options';
import {AUTHENTICATE_ROUTE} from '../config/routes';
import {RootStackParamList} from './RootScenes';

const MainStack = createStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <MainStack.Navigator screenOptions={navigationConfigs}>
      <MainStack.Screen
        name={AUTHENTICATE_ROUTE.REGISTER}
        component={RegisterScreen}
      />
    </MainStack.Navigator>
  );
};

export default AuthStack;
