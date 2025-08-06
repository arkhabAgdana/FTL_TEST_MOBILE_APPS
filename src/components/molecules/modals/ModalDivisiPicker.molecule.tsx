import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';

const divisions = ['Human Resource (HR)', 'Finance', 'Marketing', 'Sales'];

type ModalDivisionsPickerProps = {
  visible: boolean;
  onClose: () => void;
  onSelect: (room: string) => void;
};

const ModalDivisionsPicker: React.FC<ModalDivisionsPickerProps> = ({
  visible,
  onClose,
  onSelect,
}) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Pilih Ruangan</Text>
          <FlatList
            data={divisions}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  onSelect(item);
                  onClose();
                }}
              >
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000099',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    maxHeight: '60%',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  item: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
  },
});

export default ModalDivisionsPicker;
