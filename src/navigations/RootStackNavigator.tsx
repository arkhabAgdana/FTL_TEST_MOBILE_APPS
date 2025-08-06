import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './RootStackParamList';
import RouteName from '../constants/Route.constant';
import WelcomeScreen from '../screens/welcome';
import LoginScreen from '../screens/login';
import HomeScreen from '../screens/home';
import RoomBookingScreen from '../screens/bookingroom';
import ScheduleMeetingScreen from '../screens/shcedule';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteName.WelcomeScreen}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={RouteName.WelcomeScreen}
        component={WelcomeScreen}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen
        name={RouteName.LoginScreen}
        component={LoginScreen}
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        name={RouteName.HomeScreen}
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name={RouteName.RoomBookingScreen}
        component={RoomBookingScreen}
        options={{ title: 'Booking Ruang Meeting', headerShown: true }}
      />
      <Stack.Screen
        name={RouteName.ScheduleMeetingScreen}
        component={ScheduleMeetingScreen}
        options={{ title: 'Jadwal Ruang Meeting', headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
