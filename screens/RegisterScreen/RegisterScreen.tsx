import React from 'react';
import {RegisterTemplate} from '../../components/templates';

export type Props = {
  onSubmitForm: (email: string, password: string) => void;
  onPressGoogle: () => void;
  onPressFacebook: () => void;
  onPressNavigateLogin: () => void;
  onPressLinkedin: () => void;
};

export const RegisterScreen: React.FC<Props> = () => {
  const onSubmitForm = (email: string, password: string) => {
    console.log('email', email, 'password', password);
  };
  const onPressFacebook = () => {
    console.log('onPressFacebook');
  };
  const onPressGoogle = () => {
    console.log('onPressGoogle');
  };

  const onPressNavigateLogin = () => {
    console.log('onPressNavigateLogin');
  };
  const onPressLinkedin = () => {
    console.log('onPressLinkedin');
  };

  return (
    <RegisterTemplate
      onSubmitForm={onSubmitForm}
      onPressFacebook={onPressFacebook}
      onPressGoogle={onPressGoogle}
      onPressNavigateLogin={onPressNavigateLogin}
      onPressLinkedin={onPressLinkedin}
    />
  );
};
