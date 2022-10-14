/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { SocialLogin } from './SocialLogin';

storiesOf('organisms/SocialLogin', module)
    .addDecorator((story) => story())
    .add('default', () => (
        <SocialLogin
            onPressGoogle={() => {}}
            onPressFacebook={() => {}}
            onPressLinkedin={() => {}}
        />
    ));
