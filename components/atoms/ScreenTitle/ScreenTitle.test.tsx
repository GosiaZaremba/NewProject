import { render } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';
import { ScreenTitle } from './ScreenTitle';

describe('Atom ScreenTitle', () => {
    test('Component Snapshot', () => {
        const tree = renderer
            .create(
                <ScreenTitle
                    screenTitle={'ScreenTtile text'}
                    testID={'atom-screenTtile'}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('ensure variants works correctly', () => {
        const { getByTestId } = render(
            <ScreenTitle
                screenTitle={'ScreenTtile text'}
                testID={'atom-screenTtile'}
            />
        );

        const screenTitle = getByTestId('atom-screenTtile');
        expect(screenTitle).toHaveTextContent('ScreenTtile text');
    });
});
