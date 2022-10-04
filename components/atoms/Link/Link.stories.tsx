import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Link } from './Link';
import { Colors } from '../../../constants/colors';

storiesOf('atoms/Divider', module)
    .addDecorator((story) => story())
    .add('default', () => <Link text={'OR'} onPress={() => {}} />);
