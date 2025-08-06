import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';

interface DropdownFieldProps {
  label?: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  icon?: ImageSourcePropType;
  value?: string;
}

const DropdownField: React.FC<DropdownFieldProps> = ({
  label,
  onPress,
  containerStyle,
  icon = require('../../../assets/icons/polygon.png'),
  value,
}) => {
  return (
    <TouchableOpacity style={[styles.input, containerStyle]} onPress={onPress}>
      {value ? (
        <Text style={[styles.placeholderText, { color: 'black' }]}>
          {value}
        </Text>
      ) : (
        <Text style={styles.placeholderText}>{label}</Text>
      )}
      <Image source={icon} style={styles.icon} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAE1E1',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  placeholderText: {
    flex: 1,
    color: '#999',
  },
  icon: {
    width: 18,
    height: 18,
  },
});

export default DropdownField;
