import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';
import 'react-native';
import { SocialLogin } from './SocialLogin';

const mockOnPressGoogle = jest.fn();
const mockOnPressFacebook = jest.fn();
const mockOnPressLinked = jest.fn();

describe('Organism SocialLogin', () => {
    test('Component Snapshot', () => {
        const tree = renderer
            .create(
                <SocialLogin
                    onPressGoogle={mockOnPressGoogle}
                    onPressFacebook={mockOnPressFacebook}
                    onPressLinkedin={mockOnPressLinked}
                    testID={'organism-socialLogin'}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('ensure google icon works correctly', () => {
        const { getByTestId } = render(
            <SocialLogin
                onPressGoogle={mockOnPressGoogle}
                onPressFacebook={mockOnPressFacebook}
                onPressLinkedin={mockOnPressLinked}
                testID={'organism-socialLogin'}
            />
        );

        const googleIcon = getByTestId('organism-socialLogin-google-icon');
        expect(googleIcon.props.style[1].fontSize).toEqual(20);
        fireEvent.press(googleIcon);
        expect(mockOnPressGoogle).toHaveBeenCalledTimes(1);
    });

    test('ensure facebook icon works correctly', () => {
        const { getByTestId } = render(
            <SocialLogin
                onPressGoogle={mockOnPressGoogle}
                onPressFacebook={mockOnPressFacebook}
                onPressLinkedin={mockOnPressLinked}
                testID={'organism-socialLogin'}
            />
        );

        const facebookIcon = getByTestId('organism-socialLogin-facebook-icon');
        expect(facebookIcon.props.style[1].fontSize).toEqual(20);
        fireEvent.press(facebookIcon);
        expect(mockOnPressFacebook).toHaveBeenCalledTimes(1);
    });

    test('ensure linkedIN icon works correctly', () => {
        const { getByTestId } = render(
            <SocialLogin
                onPressGoogle={mockOnPressGoogle}
                onPressFacebook={mockOnPressFacebook}
                onPressLinkedin={mockOnPressLinked}
                testID={'organism-socialLogin'}
            />
        );

        const linkedInIcon = getByTestId('organism-socialLogin-linkedIn-icon');
        expect(linkedInIcon.props.style[1].fontSize).toEqual(20);
        fireEvent.press(linkedInIcon);
        expect(mockOnPressLinked).toHaveBeenCalledTimes(1);
    });
});
