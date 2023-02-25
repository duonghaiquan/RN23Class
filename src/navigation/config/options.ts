import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {Platform} from 'react-native';
import transition from './transition';

const navigationConfigs: StackNavigationOptions = {
  cardStyle: {
    backgroundColor: 'white',
  },
  headerShown: false,
  gestureEnabled: true,
  cardShadowEnabled: true,
  keyboardHandlingEnabled: Platform.OS === 'ios',
  cardOverlayEnabled: true,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  transitionSpec: {
    open: transition,
    close: transition,
  },
};

export const tabScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

export default navigationConfigs;
