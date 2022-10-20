import { render } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { Label } from './Label';

describe('Atom Label', () => {
    test('Component Snapshot', () => {
        const tree = renderer
            .create(<Label text={'Label text'} testID={'atom-label'} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('ensure variants works correctly', () => {
        const { getByTestId } = render(
            <Label text={'Label text'} testID={'atom-label'} />
        );

        const label = getByTestId('atom-label');
        expect(label).toHaveTextContent('Label text');
    });
});
