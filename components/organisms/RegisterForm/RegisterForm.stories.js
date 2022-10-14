/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { RegisterForm } from './RegisterForm';

storiesOf('organisms/RegisterForm', module)
    .addDecorator((story) => story())
    .add('default', () => <RegisterForm onSubmitForm={() => {}} />);
