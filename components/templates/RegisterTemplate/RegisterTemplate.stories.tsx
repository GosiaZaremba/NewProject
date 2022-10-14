/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { RegisterTemplate } from './RegisterTemplate';

storiesOf('templates/RegisterTemplate', module)
    .addDecorator((story) => story())
    .add('default', () => (
        <RegisterTemplate
            onSubmitForm={() => {}}
            onPressGoogle={() => {}}
            onPressFacebook={() => {}}
            onPressNavigateLogin={() => {}}
            onPressLinkedin={() => {}}
        />
    ));
