import React, {useRef} from 'react';
import {View} from 'react-native';
import {CustomButton, CustomInputReference} from '../../atoms';
import {CustomInput} from '../../atoms';
import styles from './LoginArea.styles';

export type Props = {
  onSubmitForm: (email: string, password: string) => void;
  color: string;
};

export const LoginArea: React.FC<Props> = ({onSubmitForm, color}) => {
  const emailInputReference = useRef<CustomInputReference>(null);
  const passwordInputReference = useRef<CustomInputReference>(null);

  const onSubmit = () => {
    const emailValue = emailInputReference.current?.getValue() || '';
    const passwordValue = passwordInputReference.current?.getValue() || '';
    console.log('email', emailValue, 'password', passwordValue);
    onSubmitForm(emailValue, passwordValue);
  };
  return (
    <View style={styles.outerContainer}>
      <View style={styles.inputsContainer}>
        <CustomInput
          placeholder={'email'}
          secureTextEntry={false}
          ref={emailInputReference}
        />
        <CustomInput
          placeholder={'password'}
          secureTextEntry={true}
          ref={passwordInputReference}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton title={'Sign in'} onPress={onSubmit} color={color} />
      </View>
    </View>
  );
};
