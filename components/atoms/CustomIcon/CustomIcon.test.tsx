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

    test('ensure icon works correctly', () => {
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
        const customIcon = getByTestId('atom-icon-icon');
        fireEvent.press(customIcon);
        expect(mockOnPress).toHaveBeenCalledTimes(1);
        expect(customIcon.props.style[1].fontSize).toBe(18);
        expect(customIcon.props.style[0].color).toBe(Colors.blue);
        // console.log(customIcon.props);
    });
    test('ensure pressable works correctly when pressed', () => {
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
        const iconPressable = getByTestId('atom-icon-pressable');
        fireEvent.press(iconPressable);
        expect(mockOnPress).toHaveBeenCalledTimes(2);
        expect(iconPressable.props.style[1].borderColor).toBe(Colors.blue);
        expect(iconPressable.props.style[0].opacity).toBe(0.5);
    });

    test('ensure pressable works correctly', () => {
        const { getByTestId } = render(
            <CustomIcon
                iconColor={Colors.blue}
                iconName={'facebook'}
                iconSize={18}
                iconBorderColor={Colors.blue}
                onPressIcon={mockOnPress}
                testID={'atom-icon'}
                testOnly_pressed={false}
            />
        );
        const iconPressable = getByTestId('atom-icon-pressable');
        fireEvent.press(iconPressable);
        expect(mockOnPress).toHaveBeenCalledTimes(3);
        // expect(iconPressable.props.style[1].borderColor).toBe(Colors.blue);
        // expect(iconPressable.props.style[0].opacity).toBe(undefined);
        console.log(iconPressable.props.style);
    });
});
