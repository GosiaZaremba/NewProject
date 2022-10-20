import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { CustomIcon } from './CustomIcon';
import { Colors } from '../../../constants/colors';

const mockOnPress = jest.fn();

describe('Atom CustomIcon', () => {
    test('Component Snapshot', () => {
        const tree = renderer
            .create(
                <CustomIcon
                    iconColor={Colors.blue}
                    iconName={'facebook'}
                    iconSize={18}
                    iconBorderColor={Colors.blue}
                    onPressIcon={mockOnPress}
                    testOnly_pressed={true}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('ensure variants works correctly', () => {
        const { getByTestId } = render(
            <CustomIcon
                iconColor={Colors.blue}
                iconName={'facebook'}
                iconSize={18}
                iconBorderColor={Colors.blue}
                onPressIcon={mockOnPress}
                testID={'atom-icon'}
                testOnly_pressed={true}
            />
        );
        const customIcon = getByTestId('atom-icon');
        fireEvent.press(customIcon);
        expect(mockOnPress).toHaveBeenCalledTimes(1);
        expect(customIcon.props.style[1].fontSize).toEqual(18);
    });
});
