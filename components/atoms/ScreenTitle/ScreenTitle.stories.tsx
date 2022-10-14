import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ScreenTitle } from './ScreenTitle';

storiesOf('atoms/ScreenTitle', module)
    .addDecorator((story) => story())
    .add('default', () => <ScreenTitle screenTitle={'Screen Title'} />);
