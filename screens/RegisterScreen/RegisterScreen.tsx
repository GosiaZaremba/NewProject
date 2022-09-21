import React from 'react';
import {RegisterTemplate} from '../../components/templates';

export type Props = {
  onSubmitForm: () => void;
  onPressGoogle: () => void;
  onPressFacebook: () => void;
  onPressNavigateLogin: () => void;
  onPressLinkedin: () => void;
};

export const RegisterScreen: React.FC<Props> = () => {
  const onSubmitForm = () => {
    console.log('onSubmitForm');
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
