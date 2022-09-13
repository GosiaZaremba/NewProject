import React from 'react';
import {View} from 'react-native';
import {CustomButton} from '../../atoms';
import {CustomInput} from '../../atoms';

export type Props = {
  onPress: () => void;
  color: string;
  onChangeText: () => void;
  value: string;
};

export const LoginArea: React.FC<Props> = ({
  onChangeText,
  value,
  onPress,
  color,
}) => {
  return (
    <View>
      <CustomInput
        onChangeText={onChangeText}
        placeholder={'email'}
        secureTextEntry={false}
        value={value}></CustomInput>
      <CustomInput
        onChangeText={onChangeText}
        placeholder={'password'}
        secureTextEntry={true}
        value={value}></CustomInput>
      <CustomButton
        title={'Sign in'}
        onPress={onPress}
        color={color}></CustomButton>
    </View>
  );
};
