import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';
import { Link } from './Link';

const mockOnPress = jest.fn();

describe('Atom Link', () => {
    test('Component Snapshot', () => {
        const tree = renderer
            .create(
                <Link
                    text={'Link text'}
                    testID={'atom-link'}
                    onPress={mockOnPress}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('ensure variants works correctly', () => {
        const { getByTestId } = render(
            <Link
                text={'Link text'}
                testID={'atom-link'}
                onPress={mockOnPress}
            />
        );

        const link = getByTestId('atom-link');
        expect(link).toHaveTextContent('Link text');
        fireEvent.press(link);
        expect(mockOnPress).toHaveBeenCalledTimes(1);
    });
});
