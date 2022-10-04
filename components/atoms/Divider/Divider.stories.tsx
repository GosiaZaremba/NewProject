import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Divider } from './Divider';
import { Colors } from '../../../constants/colors';

storiesOf('atoms/Divider', module)
    .addDecorator((story) => story())
    .add('default', () => <Divider text={'OR'} />);
