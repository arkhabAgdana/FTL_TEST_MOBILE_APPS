import {
  CommonActions,
  NavigationContainerRef,
  RouteProp,
  StackActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainNavigationParamList } from '../types/RootStackParam.types';

import React from 'react';

type NavigationParams = Record<string, any>;

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

const replace = (routeName: string, params?: NavigationParams): void => {
  navigationRef.current?.dispatch(StackActions.replace(routeName, params));
};

const reset = (routeName: string): void => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: routeName }],
    }),
  );
};

export const useTypedRoute = <
  RouteParams extends Record<string, object | undefined>,
  RouteName extends keyof RouteParams,
>() => {
  const route = useRoute<RouteProp<RouteParams, RouteName>>();
  return route;
};

export const useNavigationWithParams = () => {
  return useNavigation<NativeStackNavigationProp<MainNavigationParamList>>();
};

export const NavigationRoot = {
  navigate: navigationRef.current?.navigate,
  back: navigationRef.current?.goBack,
  replace,
  reset,
};
