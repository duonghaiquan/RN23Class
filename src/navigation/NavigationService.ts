import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import {APP_ROUTE} from './config/routes';
import {RootStackParamList} from './sence/RootScenes';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(name: string, params = {}): void {
  navigationRef.navigate(name, params);
}

export function goBack(): void {
  navigationRef.goBack();
}

export function navigateReplace(name: string, params = {}): void {
  navigationRef.dispatch(StackActions.replace(name, params));
}

export function reset(name?: string) {
  navigationRef.dispatch({
    ...CommonActions.reset({
      index: 1,
      routes: [{name: name || APP_ROUTE.MAIN_TAB}],
    }),
  });
}
