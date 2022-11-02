import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';
import 'react-native';
import { LoginTemplate } from './LoginTemplate';

const mockOnPress = jest.fn();
const mockOnPressGoogle = jest.fn();
const mockOnPressFacebook = jest.fn();
const mockOnPressLinked = jest.fn();
const mockOnPressForgotPassword = jest.fn();
const mockOnPressNavigateSignup = jest.fn();

describe('Template LoginTemplate', () => {
    test('Component Snapshot', () => {
        const tree = renderer
            .create(
                <LoginTemplate
                    onSubmitForm={mockOnPress}
                    onPressGoogle={mockOnPressGoogle}
                    onPressFacebook={mockOnPressFacebook}
                    onPressLinkedin={mockOnPressLinked}
                    onPressForgotPassword={mockOnPressForgotPassword}
                    onPressNavigateSignup={mockOnPressNavigateSignup}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('ensure onSubmitForm works correctly', () => {
        const { getByTestId } = render(
            <LoginTemplate
                onSubmitForm={mockOnPress}
                onPressGoogle={mockOnPressGoogle}
                onPressFacebook={mockOnPressFacebook}
                onPressLinkedin={mockOnPressLinked}
                onPressForgotPassword={mockOnPressForgotPassword}
                onPressNavigateSignup={mockOnPressNavigateSignup}
            />
        );

        const inputEmail = getByTestId('organism-loginForm-email-input');
        const inputPassword = getByTestId('organism-loginForm-password-input');
        const loginSwitch = getByTestId('organism-loginForm-switch');
        const submitButton = getByTestId('organism-loginForm-button');
        fireEvent.changeText(inputPassword, 'haslo');
        fireEvent.changeText(inputEmail, 'mail@wp.pl');
        fireEvent(loginSwitch, 'onValueChange', { value: true });
        fireEvent.press(submitButton);
        expect(mockOnPress).toHaveBeenCalledWith('mail@wp.pl', 'haslo', true);
    });

    test('ensure linkedInIcon works correctly', () => {
        const { getByTestId } = render(
            <LoginTemplate
                onSubmitForm={mockOnPress}
                onPressGoogle={mockOnPressGoogle}
                onPressFacebook={mockOnPressFacebook}
                onPressLinkedin={mockOnPressLinked}
                onPressForgotPassword={mockOnPressForgotPassword}
                onPressNavigateSignup={mockOnPressNavigateSignup}
            />
        );
        const linkedInIcon = getByTestId(
            'templates-loginTemplate-linkedIn-icon'
        );
        expect(linkedInIcon.props.style[1].fontSize).toEqual(20);
        fireEvent.press(linkedInIcon);
        expect(mockOnPressLinked).toHaveBeenCalledTimes(1);
    });

    test('ensure googleIcon works correctly', () => {
        const { getByTestId } = render(
            <LoginTemplate
                onSubmitForm={mockOnPress}
                onPressGoogle={mockOnPressGoogle}
                onPressFacebook={mockOnPressFacebook}
                onPressLinkedin={mockOnPressLinked}
                onPressForgotPassword={mockOnPressForgotPassword}
                onPressNavigateSignup={mockOnPressNavigateSignup}
            />
        );

        const googleIcon = getByTestId('templates-loginTemplate-google-icon');
        expect(googleIcon.props.style[1].fontSize).toEqual(20);
        fireEvent.press(googleIcon);
        expect(mockOnPressGoogle).toHaveBeenCalledTimes(1);
    });

    test('ensure facebookIcon works correctly', () => {
        const { getByTestId } = render(
            <LoginTemplate
                onSubmitForm={mockOnPress}
                onPressGoogle={mockOnPressGoogle}
                onPressFacebook={mockOnPressFacebook}
                onPressLinkedin={mockOnPressLinked}
                onPressForgotPassword={mockOnPressForgotPassword}
                onPressNavigateSignup={mockOnPressNavigateSignup}
            />
        );

        const facebookIcon = getByTestId(
            'templates-loginTemplate-facebook-icon'
        );
        expect(facebookIcon.props.style[1].fontSize).toEqual(20);
        fireEvent.press(facebookIcon);
        expect(mockOnPressFacebook).toHaveBeenCalledTimes(1);
    });
});
