import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Label } from './Label';

storiesOf('atoms/Label', module)
    .addDecorator((story) => story())
    .add('default', () => <Label text={'Label'} />);
