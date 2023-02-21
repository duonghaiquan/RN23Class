import {Platform} from 'react-native/types';

const navigationConfigs = {
  cardStyle: {
    backgroundColor: 'white',
  },
  headerShown: false,
  gestureEnabled: true,
  cardShadowEnabled: true,
  keyboardHandlingEnabled: Platform.OS === 'ios',
  cardOverlayEnabled: true,
};

export default navigationConfigs;
