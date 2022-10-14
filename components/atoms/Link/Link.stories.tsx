import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Link } from './Link';

storiesOf('atoms/Link', module)
    .addDecorator((story) => story())
    .add('default', () => <Link text={'OR'} onPress={() => {}} />);
