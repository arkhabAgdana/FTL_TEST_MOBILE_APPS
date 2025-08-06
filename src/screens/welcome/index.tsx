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

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View style={styles.wrapper}>
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <Text style={styles.bold}>Selamat Datang</Text>
        <Text style={styles.semiBold}>Di Aplikasi</Text>
        <Text style={styles.bold}>Ruang Meeting</Text>
      </View>

      <ButtonSolid
        title="Next"
        width={'50%'}
        onPress={() => navigation.navigate(RouteName.LoginScreen)}
      />
    </View>
  );
};

export default WelcomeScreen;
