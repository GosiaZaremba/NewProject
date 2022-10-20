import { render } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { Divider } from './Divider';

describe('Atom Divider', () => {
    test('Component Snapshot', () => {
        const tree = renderer
            .create(<Divider text={'Divider text'} testID={'atom-divider'} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('ensure variants works correctly', () => {
        const { getByTestId } = render(
            <Divider text={'Divider text'} testID={'atom-divider'} />
        );

        const divider = getByTestId('atom-divider');
        expect(divider).toHaveTextContent('Divider text');
    });
});
