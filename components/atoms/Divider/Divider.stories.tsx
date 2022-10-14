import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Divider } from './Divider';
import { text } from '@storybook/addon-knobs';

storiesOf('atoms/Divider', module)
    .addDecorator((story) => story())
    .add('default', () => <Divider text={text('Divider text', 'OR')} />);
