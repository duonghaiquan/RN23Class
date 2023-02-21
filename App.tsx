import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Root from './src/navigation/screens/Root';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
export default App;
