import React from 'react';
import {TextInput} from 'react-native';

export type Props = {
  onChangeText: () => void;
  placeholder: string;
  secureTextEntry: boolean;
  value: string;
};

export const CustomInput: React.FC<Props> = ({
  onChangeText,
  placeholder,
  secureTextEntry,
  value,
}) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={value}></TextInput>
  );
};
