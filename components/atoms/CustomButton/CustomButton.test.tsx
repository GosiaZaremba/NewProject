import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { CustomButton } from './CustomButton';
import { Colors } from '../../../constants/colors';

const mockOnPress = jest.fn();

describe('Atom Button', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    test('Component Snapshot', () => {
        const tree = renderer
            .create(
                <CustomButton
                    title={'Button title'}
                    color={Colors.pink}
                    onPress={mockOnPress}
                    testID="atom-button"
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
                onPress={mockOnPress}
                testID="atom-button"
            />
        );
        const customButton = getByTestId('atom-button');
        fireEvent.press(customButton);
        expect(mockOnPress).toHaveBeenCalledTimes(1);
        expect(customButton).toHaveTextContent('Button title');
    });

    test('ensure variants works correctly 2', () => {
        const { getByTestId } = render(
            <CustomButton
                title={'Button title'}
                color={Colors.pink}
                onPress={mockOnPress}
                testID="atom-button"
            />
        );
        const customButton = getByTestId('atom-button');
        fireEvent.press(customButton);
        expect(mockOnPress).toHaveBeenCalledTimes(1);
        expect(customButton).toHaveTextContent('Button title');
    });
});
