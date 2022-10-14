import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { CustomSwitch } from './CustomSwitch';
import { Colors } from '../../../constants/colors';
import { color } from '@storybook/addon-knobs';

storiesOf('atoms/CustomSwitch', module)
    .addDecorator((story) => story())
    .add('default', () => (
        <CustomSwitch
            trackColorFalse={color('trackColorFalse', Colors.pink)}
            trackColorTrue={color('trackColorTrue', Colors.pink)}
            thumbColorOn={color('thumbColorOn', Colors.pink)}
            thumbColorOff={color('thumbColorOff', Colors.pink)}
        />
    ));
