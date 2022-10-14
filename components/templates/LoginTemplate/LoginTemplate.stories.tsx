/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { LoginTemplate } from './LoginTemplate';

storiesOf('templates/LoginTemplate', module)
    .addDecorator((story) => story())
    .add('default', () => (
        <LoginTemplate
            onSubmitForm={() => {}}
            onPressGoogle={() => {}}
            onPressFacebook={() => {}}
            onPressForgotPassword={() => {}}
            onPressNavigateSignup={() => {}}
            onPressLinkedin={() => {}}
        />
    ));
