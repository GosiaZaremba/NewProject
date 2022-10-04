import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { CustomIcon } from './CustomIcon';
import { Colors } from '../../../constants/colors';

storiesOf('atoms/CustomIcon', module)
    .addDecorator((story) => story())
    .add('default', () => (
        <CustomIcon
            iconColor={Colors.blue}
            iconName={'facebook'}
            iconSize={18}
            iconBorderColor={Colors.blue}
            onPressIcon={() => {}}
        />
    ));
