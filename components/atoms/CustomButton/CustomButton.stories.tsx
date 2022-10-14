/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { CustomButton } from './CustomButton';
import { Colors } from '../../../constants/colors';
import { color, text } from '@storybook/addon-knobs';

storiesOf('atoms/CustomButton', module)
    .addDecorator((story) => story())
    .add('default', () => (
        <CustomButton
            title={text('title', 'Button Title')}
            color={color('color', Colors.pink)}
            onPress={() => {}}
        />
    ));
