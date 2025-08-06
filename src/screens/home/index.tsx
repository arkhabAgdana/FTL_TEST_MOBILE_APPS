import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import ButtonSolid from '../../components/atomics/buttons/ButtonSolid.atomic';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/RootStackParamList';
import RouteName from '../../constants/Route.constant';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View
      style={[styles.wrapper, { flex: 1, justifyContent: 'space-between' }]}
    >
      {/* TOP CONTENT */}
      <View style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 20,
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <View
            style={{
              backgroundColor: '#BEC3E6',
              width: 75,
              height: 75,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 75 / 2,
            }}
          >
            <Text style={[styles.bold, { color: 'white', fontSize: 48 }]}>
              Y
            </Text>
          </View>
          <View>
            <Text style={[styles.bold, { fontSize: 24 }]}>Yosi</Text>
            <Text style={[styles.regular]}>Web Developer</Text>
          </View>
        </View>

        <Text style={[styles.semiBold, { fontSize: 15, marginBottom: 10 }]}>
          Jadwal Ruang Meeting Hari Ini
        </Text>

        {/* JADWAL */}
        <View style={{ gap: 10 }}>
          {[
            { time: '08:00 - 09:00', room: 'Squats Room' },
            { time: '10:00 - 12:00', room: 'Lunges Room' },
          ].map((item, index) => (
            <View
              key={index}
              style={{
                backgroundColor: '#D9D9D9',
                width: '100%',
                paddingVertical: 17,
                paddingHorizontal: 21,
                borderRadius: 8,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={[styles.semiBold, { fontSize: 15, color: 'white' }]}
                >
                  {item.time}
                </Text>
                <Text
                  style={[styles.semiBold, { fontSize: 15, color: 'white' }]}
                >
                  {item.room}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* BOTTOM BUTTON */}
      <View
        style={{
          backgroundColor: '#D9D9D982',
          width: '100%',
          paddingVertical: 23,
          paddingHorizontal: 58,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: 'row', gap: 5 }}
          onPress={() => navigation.navigate(RouteName.ScheduleMeetingScreen)}
        >
          <Image
            source={require('../../assets/icons/list.png')}
            style={{ width: 34, height: 34, tintColor: 'black' }}
            resizeMode="contain"
          />
          <Text style={{ width: '50%' }}>Jadwal Ruang Meeting</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: 'row', gap: 5 }}
          onPress={() => navigation.navigate(RouteName.RoomBookingScreen)}
        >
          <Image
            source={require('../../assets/icons/note.png')}
            style={{ width: 34, height: 34, tintColor: 'black' }}
            resizeMode="contain"
          />
          <Text style={{ width: '60%' }}>Booking Ruang Meeting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
