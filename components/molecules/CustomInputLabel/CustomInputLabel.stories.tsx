import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { CustomInputLabel } from './CustomInputLabel';

storiesOf('molecules/CustomInputLabel', module)
    .addDecorator((story) => story())
    .add('default', () => (
        <CustomInputLabel
            labelText={'Label text'}
            placeholder={'placeholder'}
            secureTextEntry={false}
        />
    ));
