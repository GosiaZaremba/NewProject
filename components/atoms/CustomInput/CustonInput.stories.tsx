import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { CustomInput } from './CustomInput';

storiesOf('atoms/CustomInput', module)
    .addDecorator((story) => story())
    .add('default', () => (
        <CustomInput placeholder={'Email'} secureTextEntry={true} />
    ));
