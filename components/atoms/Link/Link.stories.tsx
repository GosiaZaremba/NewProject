import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Link } from './Link';
import { text } from '@storybook/addon-knobs';

storiesOf('atoms/Link', module)
    .addDecorator((story) => story())
    .add('default', () => (
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        <Link text={text('Link text', 'Link text')} onPress={() => {}} />
    ));
