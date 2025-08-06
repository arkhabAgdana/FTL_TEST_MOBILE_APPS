import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './styles';
import DropdownField from '../../components/molecules/dropdowns/Dropdown.molecule';
import ModalRoomPicker from '../../components/molecules/modals/ModalRoomsPicker.molecule';
import DatePicker from 'react-native-date-picker';

const ScheduleMeetingScreen: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [dateForm, setDateForm] = useState('');
  const [dateModal, setDateModal] = useState(false);

  const [roomModalVisible, setRoomModalVisible] = useState(false);
  const [room, setRoom] = useState('');

  const scheduleData = [
    { time: '08:00 - 09:00', room: 'Squats Room' },
    { time: '10:00 - 12:00', room: 'Lunges Room' },
    { time: '13:00 - 14:00', room: 'Squats Room' },
    { time: '15:00 - 16:00', room: 'Squats Room' },
    { time: '17:00 - 18:00', room: 'Lunges Room' },
  ];

  const filteredSchedule = room
    ? scheduleData.filter(item => item.room === room)
    : scheduleData;

  return (
    <View style={styles.wrapper}>
      <View
        style={{
          backgroundColor: '#D9D9D982',
          paddingHorizontal: 20,
          paddingVertical: 15,
          marginBottom: 36,
        }}
      >
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
      </View>

      <ScrollView contentContainerStyle={{ gap: 10, paddingHorizontal: 20 }}>
        {filteredSchedule.length > 0 ? (
          filteredSchedule.map((item, index) => (
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
          ))
        ) : (
          <Text style={{ textAlign: 'center', color: '#888' }}>
            Tidak ada jadwal untuk ruangan ini.
          </Text>
        )}
      </ScrollView>

      <ModalRoomPicker
        visible={roomModalVisible}
        onClose={() => setRoomModalVisible(false)}
        onSelect={selectedRoom => setRoom(selectedRoom)}
      />

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
    </View>
  );
};

export default ScheduleMeetingScreen;
