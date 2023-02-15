import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LoginScreen from './src/features/authenticate/LoginScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <LoginScreen />
    </SafeAreaView>
  );
}
export default App;
