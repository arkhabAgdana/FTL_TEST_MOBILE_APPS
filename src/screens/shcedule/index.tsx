import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import ButtonSolid from '../../components/atomics/buttons/ButtonSolid.atomic';
import {
  NavigationContainerProps,
  useNavigation,
} from '@react-navigation/native';
import RouteName from '../../constants/Route.constant';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/RootStackParamList';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const ScheduleMeetingScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View style={styles.wrapper}>
      <Text style={styles.semiBold}>Schedule Screen</Text>
    </View>
  );
};

export default ScheduleMeetingScreen;
