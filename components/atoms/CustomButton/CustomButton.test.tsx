import { render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { CustomButton } from './CustomButton';
import { Colors } from '../../../constants/colors';

describe('Button Atom', () => {
    test('Component Snapshot', () => {
        const tree = renderer
            .create(
                <CustomButton
                    title={'Button title'}
                    color={Colors.pink}
                    onPress={() => {}}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('ensure variants works correctly', () => {
        const { getByTestId } = render(
            <CustomButton
                title={'Button title'}
                color={Colors.pink}
                onPress={() => {}}
                testID="atom-button"
            />
        );
        const customButton = getByTestId('atom-button');
        expect(customButton).toHaveTextContent('Button title');
    });
});
