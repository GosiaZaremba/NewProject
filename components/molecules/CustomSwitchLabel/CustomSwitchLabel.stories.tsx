import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { CustomSwitchLabel } from './CustomSwitchLabel';
import { color, text } from '@storybook/addon-knobs';
import { Colors } from '../../../constants/colors';

storiesOf('molecules/CustomSwitchLabel', module)
    .addDecorator((story) => story())
    .add('default', () => (
        <CustomSwitchLabel
            trackColorFalse={color('trackColorFalse', Colors.pink)}
            trackColorTrue={color('trackColorTrue', Colors.pink)}
            thumbColorOn={color('thumbColorOn', Colors.pink)}
            thumbColorOff={color('thumbColorOff', Colors.pink)}
            labelText={text('Label Text', 'Label Text')}
        />
    ));
