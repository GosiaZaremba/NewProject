import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { CustomInputLabel } from './CustomInputLabel';
import { boolean, text } from '@storybook/addon-knobs';

storiesOf('molecules/CustomInputLabel', module)
    .addDecorator((story: () => void) => story())
    .add('default', () => (
        <CustomInputLabel
            labelText={text('Label Text', 'Label Text')}
            placeholder={text('Placeholder', 'Placeholder')}
            secureTextEntry={boolean('secureTextEntry', false)}
        />
    ));
