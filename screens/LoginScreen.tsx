import React from 'react';
import {LoginTemplate} from '../components/templates';

export type Props = {
  onSubmitForm: () => void;
  onPressGoogle: () => void;
  onPressFacebook: () => void;
  onPressForgotPassword: () => void;
  onPressNavigateSignup: () => void;
  onPressLinkedin: () => void;
};

export const LoginScreen: React.FC<Props> = () => {
  const onSubmitForm = () => {
    console.log('onSubmitForm');
  };
  const onPressFacebook = () => {
    console.log('onPressFacebook');
  };
  const onPressGoogle = () => {
    console.log('onPressGoogle');
  };

  const onPressForgotPassword = () => {
    console.log('onPressForgotPassword');
  };

  const onPressNavigateSignup = () => {
    console.log('onPressNavigateSignup');
  };
  const onPressLinkedin = () => {
    console.log('onPressLinkedin');
  };

  return (
    <LoginTemplate
      onSubmitForm={onSubmitForm}
      onPressFacebook={onPressFacebook}
      onPressGoogle={onPressGoogle}
      onPressForgotPassword={onPressForgotPassword}
      onPressNavigateSignup={onPressNavigateSignup}
      onPressLinkedin={onPressLinkedin}
    />
  );
};
