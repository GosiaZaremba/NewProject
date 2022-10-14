/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { LoginForm } from './LoginForm';
import { Colors } from '../../../constants/colors';
import { color } from '@storybook/addon-knobs';

storiesOf('organisms/LoginForm', module)
    .addDecorator((story) => story())
    .add('default', () => <LoginForm onSubmitForm={() => {}} />);
