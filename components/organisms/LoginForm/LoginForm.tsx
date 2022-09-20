import React, {useRef, useState} from 'react';
import {View, Switch} from 'react-native';
import {Colors} from '../../../constants/colors';
import {
  CustomButton,
  CustomInputReference,
  Label,
  CustomInput,
} from '../../atoms';
import styles from './LoginForm.styles';

export type Props = {
  onSubmitForm: (email: string, password: string) => void;
  color: string;
};

export const LoginForm: React.FC<Props> = ({onSubmitForm, color}) => {
  const [remember, setRemember] = useState(false);
  const emailInputReference = useRef<CustomInputReference>(null);
  const passwordInputReference = useRef<CustomInputReference>(null);

  const onSubmit = () => {
    const emailValue = emailInputReference.current?.getValue() || '';
    const passwordValue = passwordInputReference.current?.getValue() || '';
    console.log(
      'email',
      emailValue,
      'password',
      passwordValue,
      'remember',
      remember,
    );
    onSubmitForm(emailValue, passwordValue);
  };

  const toggleSwitch = () => setRemember(previousState => !previousState);
  return (
    <View style={styles.outerContainer}>
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <Label text={'Email'} />
          <CustomInput
            placeholder={'email'}
            secureTextEntry={false}
            ref={emailInputReference}
          />
        </View>
        <View style={styles.inputContainer}>
          <Label text={'Password'} />
          <CustomInput
            placeholder={'password'}
            secureTextEntry={true}
            ref={passwordInputReference}
          />
        </View>
      </View>
      <View style={styles.switch}>
        <Switch
          trackColor={{false: Colors.grey, true: Colors.grey}}
          thumbColor={remember ? Colors.pink : Colors.grey}
          onValueChange={toggleSwitch}
          value={remember}></Switch>
        <Label text={'Remember me?'} />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton title={'Login'} onPress={onSubmit} color={color} />
      </View>
    </View>
  );
};
