import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ScreenTitle } from './ScreenTitle';
import { text } from '@storybook/addon-knobs';

storiesOf('atoms/ScreenTitle', module)
    .addDecorator((story) => story())
    .add('default', () => (
        <ScreenTitle screenTitle={text('Screen Title', 'Screen Title')} />
    ));
