import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';

type ButtonSolidProps = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  width?: number | `${number}%`;
  type?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'big';
  backgroundColor?: string;
  borderRadius?: number;
};

const ButtonSolid: React.FC<ButtonSolidProps> = ({
  title,
  onPress,
  width = '100%',
  backgroundColor = '#D9D9D9',
  borderRadius = 20,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width,
          backgroundColor,
          borderRadius,
        },
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 6,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ButtonSolid;
