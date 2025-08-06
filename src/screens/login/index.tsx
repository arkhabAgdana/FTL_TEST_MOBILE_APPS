import React, { useState } from 'react';
import {
  Image,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import ButtonSolid from '../../components/atomics/buttons/ButtonSolid.atomic';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/RootStackParamList';
import { useNavigation } from '@react-navigation/native';
import RouteName from '../../constants/Route.constant';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const signIn = () => {
    if (email === 'yosi@gmail.com' && password === 'password') {
      navigation.navigate(RouteName.HomeScreen);
      ToastAndroid.show('Login Success', ToastAndroid.SHORT);
    } else if (email === '' && password === '') {
      ToastAndroid.show('fill in your email and password', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Wrong password or email', ToastAndroid.SHORT);
    }
  };
  return (
    <View style={styles.wrapper}>
      <Text style={styles.bold}>Ruangan Meeting</Text>

      <View style={{ flex: 1, marginTop: 126 }}>
        <View style={styles.formContainer}>
          <Text style={styles.signInText}>Sign In</Text>

          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email..."
            placeholderTextColor="#999"
          />
          <View style={styles.passwordWrapper}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              value={password}
              onChangeText={setPassword}
              placeholder="Password..."
              placeholderTextColor="#999"
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              style={styles.toggleButton}
            >
              <Image
                source={require('../../assets/icons/hide.png')}
                style={styles.eyeIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <ButtonSolid
              title="Sign In"
              width={'50%'}
              borderRadius={8}
              backgroundColor="white"
              onPress={() => signIn()}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
