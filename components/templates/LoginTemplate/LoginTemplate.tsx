import React from 'react';
import {View} from 'react-native';
import {Colors} from '../../../constants/colors';
import {Label, ScreenTitle, Link} from '../../atoms';
import {SocialLogin} from '../../organisms/SocialLogin/SocialLogin';
import {LoginForm} from '../../organisms';
import styles from './LoginTemplate.styles';

export type Props = {
  onSubmitForm: () => void;
  onPressGoogle: () => void;
  onPressFacebook: () => void;
  onPressForgotPassword: () => void;
  onPressNavigateSignup: () => void;
  onPressLinkedin: () => void;
};

export const LoginTemplate: React.FC<Props> = ({
  onSubmitForm,
  onPressFacebook,
  onPressGoogle,
  onPressForgotPassword,
  onPressNavigateSignup,
  onPressLinkedin,
}) => {
  return (
    <View style={styles.mainContainer}>
      <ScreenTitle screenTitle={'LOGIN'} />
      <LoginForm onSubmitForm={onSubmitForm} color={Colors.pink} />
      <View style={styles.link}>
        <Link text={'Forgot Password?'} onPress={onPressForgotPassword} />
      </View>
      <SocialLogin
        onPressFacebook={onPressFacebook}
        onPressGoogle={onPressGoogle}
        onPressLinkedin={onPressLinkedin}
      />
      <View style={styles.footer}>
        <Label text={'Need an account? '} />
        <Link text={'SIGN UP'} onPress={onPressNavigateSignup} />
      </View>
    </View>
  );
};
