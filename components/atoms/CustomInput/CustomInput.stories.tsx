import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { CustomInput } from './CustomInput';
import { boolean, text } from '@storybook/addon-knobs';

storiesOf('atoms/CustomInput', module)
    .addDecorator((story) => story())
    .add('default', () => (
        <CustomInput
            placeholder={text('placeholder', 'Email')}
            secureTextEntry={boolean('secureTextEntry', true)}
        />
    ));
