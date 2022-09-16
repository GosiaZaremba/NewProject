import React from 'react';
import {View} from 'react-native';
import {Colors} from '../../../constants/colors';
import {Label, ScreenTitle} from '../../atoms';
import {SocialLogin} from '../../organisms/SocialLogin/SocialLogin';
import {LoginForm} from '../../organisms';
import styles from './LoginTemplate.styles';

export type Props = {
  onSubmitForm: () => void;
  color: string;
  screenTitle: string;
  onPressGoogle: () => void;
  onPressFacebook: () => void;
};

export const LoginTemplate: React.FC<Props> = ({
  onSubmitForm,
  onPressFacebook,
  onPressGoogle,
  screenTitle,
}) => {
  return (
    <View>
      <ScreenTitle screenTitle={'LOGIN'} />
      <LoginForm onSubmitForm={onSubmitForm} color={Colors.pink} />
      <Label text={'Forgot Password?'} />
      <SocialLogin
        onPressFacebook={onPressFacebook}
        onPressGoogle={onPressGoogle}
      />
    </View>
  );
};
