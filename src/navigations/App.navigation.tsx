import { navigationRef } from '../helpers/navigation';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import RootStackNavigator from './RootStackNavigator';
import HomeScreen from '../screens/home';

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView style={{ flex: 1 }}>
        <RootStackNavigator />
        {/* <HomeScreen /> */}
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default AppNavigation;
