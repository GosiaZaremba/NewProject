import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { CustomSwitch } from './CustomSwitch';
import { Colors } from '../../../constants/colors';

storiesOf('atoms/CustomSwitch', module)
    .addDecorator((story) => story())
    .add('default', () => (
        <CustomSwitch
            trackColorFalse={Colors.grey}
            trackColorTrue={Colors.grey}
            thumbColorOn={Colors.pink}
            thumbColorOff={Colors.grey}
        />
    ));
