import RouteName from '../constants/Route.constant';

export type AuthNavigationParamList = {
  [RouteName.OrderScreen]: undefined;
};

export type MainNavigationParamList = {
  [RouteName.OrderScreen]: {
    screen: keyof AuthNavigationParamList;
    params?: AuthNavigationParamList[keyof AuthNavigationParamList];
  };
};
