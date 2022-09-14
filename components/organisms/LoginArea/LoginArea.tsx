import React from 'react';
import {View} from 'react-native';
import {CustomButton} from '../../atoms';
import {CustomInput} from '../../atoms';
import styles from './LoginArea.styles';

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
    <View style={styles.outerContainer}>
      <View style={styles.inputsContainer}>
        <CustomInput
          onChangeText={onChangeText}
          placeholder={'email'}
          secureTextEntry={false}
          value={value}
        />
        <CustomInput
          onChangeText={onChangeText}
          placeholder={'password'}
          secureTextEntry={true}
          value={value}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton title={'Sign in'} onPress={onPress} color={color} />
      </View>
    </View>
  );
};
