import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';

type DynamicTextInputProps = {
  label?: string;
  error?: string;
  containerStyle?: object;
  inputStyle?: object;
  required?: boolean;
  autofill?: boolean;
  value?: string;
} & TextInputProps;

const DynamicTextInput: React.FC<DynamicTextInputProps> = ({
  label,
  error,
  containerStyle,
  inputStyle,
  required = false,
  autofill = false,
  value,
  ...rest
}) => {
  return (
    <View style={containerStyle}>
      <TextInput
        style={[
          styles.input,
          inputStyle,
          {
            backgroundColor: '#FAF5F5',
          },
        ]}
        value={value}
        placeholderTextColor={'#fff'}
        readOnly={autofill}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#FAF5F5',
    borderRadius: 6,
    paddingHorizontal: 12,
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
  },
});

export default DynamicTextInput;
