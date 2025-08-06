import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import styles from './styles';
import DropdownField from '../../components/molecules/dropdowns/Dropdown.molecule';
import DatePicker from 'react-native-date-picker';
import ModalRoomPicker from '../../components/molecules/modals/ModalRoomsPicker.molecule';
import ModalDivisionsPicker from '../../components/molecules/modals/ModalDivisiPicker.molecule';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/RootStackParamList';
import { useNavigation } from '@react-navigation/native';
import ButtonSolid from '../../components/atomics/buttons/ButtonSolid.atomic';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
const BookingRuangMeetingScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const [date, setDate] = useState(new Date());
  const [dateForm, setDateForm] = useState('');
  const [dateModal, setDateModal] = useState(false);

  const [roomModalVisible, setRoomModalVisible] = useState(false);
  const [room, setRoom] = useState('');

  const [divisionsModalVisible, setDivisionsModalVisible] = useState(false);
  const [division, setDivision] = useState('');

  const [startTime, setStartTime] = useState('');
  const [timeStartModal, setTimeStartModal] = useState(false);

  const [endTime, setEndTime] = useState('');
  const [timeEndModal, setTimeEndModal] = useState(false);

  const [participants, setParticipants] = useState('');

  const handleSubmit = () => {
    if (
      !division ||
      !room ||
      !dateForm ||
      !startTime ||
      !endTime ||
      !participants
    ) {
      ToastAndroid.show(
        'Incomplete Form, Please fill in all fields before submitting.',
        ToastAndroid.SHORT,
      );
      return;
    } else {
      navigation.navigate('HomeScreen', {
        room,
        startTime,
        endTime,
      });
      ToastAndroid.show('Success.', ToastAndroid.SHORT);
    }
  };
  return (
    <View style={styles.wrapper}>
      {/* Form */}
      <ScrollView contentContainerStyle={styles.form}>
        <DropdownField
          label={'Divisi'}
          value={division}
          onPress={() => setDivisionsModalVisible(true)}
          icon={require('../../assets/icons/polygon.png')}
        />
        <DropdownField
          label={'Ruang Meeting'}
          value={room}
          onPress={() => setRoomModalVisible(true)}
          icon={require('../../assets/icons/polygon.png')}
        />
        <DropdownField
          label={'Tanggal Meeting'}
          value={dateForm}
          onPress={() => setDateModal(true)}
          icon={require('../../assets/icons/calendar.png')}
        />
        <DropdownField
          label={'Waktu Mulai Meeting'}
          value={startTime}
          onPress={() => setTimeStartModal(true)}
          icon={require('../../assets/icons/clock.png')}
        />
        <DropdownField
          label={'Waktu Selesai Meeting'}
          value={endTime}
          onPress={() => setTimeEndModal(true)}
          icon={require('../../assets/icons/clock.png')}
        />

        <View style={styles.input}>
          <TextInput
            style={{ flex: 1, color: 'black' }}
            placeholder="Jumlah Peserta"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={participants}
            onChangeText={setParticipants}
          />
        </View>
      </ScrollView>

      {/* Submit Button */}

      <ButtonSolid
        title={'Submit'}
        onPress={() => handleSubmit()}
        borderRadius={10}
      />

      <ModalRoomPicker
        visible={roomModalVisible}
        onClose={() => setRoomModalVisible(false)}
        onSelect={selectedRoom => setRoom(selectedRoom)}
      />
      <ModalDivisionsPicker
        visible={divisionsModalVisible}
        onClose={() => setDivisionsModalVisible(false)}
        onSelect={selectedDivisions => setDivision(selectedDivisions)}
      />

      {/* Date Picker */}
      <DatePicker
        modal
        mode="date"
        open={dateModal}
        date={date}
        onConfirm={selectedDate => {
          setDateModal(false);
          setDate(selectedDate);
          setDateForm(selectedDate.toLocaleDateString('id-ID'));
        }}
        onCancel={() => setDateModal(false)}
      />

      {/* Time Picker Start */}
      <DatePicker
        modal
        mode="time"
        open={timeStartModal}
        date={new Date()}
        onConfirm={selectedTimeStart => {
          setTimeStartModal(false);
          const timeString = selectedTimeStart.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
          });
          setStartTime(timeString);
        }}
        onCancel={() => setTimeStartModal(false)}
      />

      {/* Time Picker End */}
      <DatePicker
        modal
        mode="time"
        open={timeEndModal}
        date={new Date()}
        onConfirm={selectedTimeEnd => {
          setTimeEndModal(false);
          const timeString = selectedTimeEnd.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
          });
          setEndTime(timeString);
        }}
        onCancel={() => setTimeEndModal(false)}
      />
    </View>
  );
};

export default BookingRuangMeetingScreen;
