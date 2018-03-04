import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry
}) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#727171"
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    fontSize: 16,
    lineHeight: 23,
    paddingBottom: 10
  },
  labelStyle: {
    fontSize: 11,
    flex: 1,
    marginBottom: -4
  },
  containerStyle: {
    height: 40,
    alignItems: 'flex-start'
  }
};

export { Input };
