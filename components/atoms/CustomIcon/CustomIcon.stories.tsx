/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { CustomIcon } from './CustomIcon';
import { Colors } from '../../../constants/colors';
import { color, number, text } from '@storybook/addon-knobs';

storiesOf('atoms/CustomIcon', module)
    .addDecorator((story) => story())
    .add('default', () => (
        <CustomIcon
            iconColor={color('blue', Colors.blue)}
            iconName={text('name', 'facebook')}
            iconSize={number('fontSize', 18)}
            iconBorderColor={color('blue', Colors.blue)}
            onPressIcon={() => {}}
            testOnly_pressed={true}
        />
    ));
