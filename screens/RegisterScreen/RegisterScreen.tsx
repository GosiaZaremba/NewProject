import React from 'react';
import {RegisterTemplate} from '../../components/templates';

export const RegisterScreen: React.FC = () => {
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
