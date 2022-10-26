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
                    testID={'template-loginTemplate'}
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
                testID={'template-loginTemplate'}
            />
        );

        const inputEmail = getByTestId(
            'template-loginTemplate-email-input-input'
        );
        const inputPassword = getByTestId(
            'template-loginTemplate-password-input-input'
        );
        const loginSwitch = getByTestId(
            'template-loginTemplate-login-switch-switch'
        );
        const submitButton = getByTestId(
            'template-loginTemplate-submit-button'
        );
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
                testID={'template-loginTemplate'}
            />
        );
        const linkedInIcon = getByTestId(
            'template-loginTemplate-linkedIn-icon'
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
                testID={'template-loginTemplate'}
            />
        );

        const googleIcon = getByTestId('template-loginTemplate-google-icon');
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
                testID={'template-loginTemplate'}
            />
        );

        const facebookIcon = getByTestId(
            'template-loginTemplate-facebook-icon'
        );
        expect(facebookIcon.props.style[1].fontSize).toEqual(20);
        fireEvent.press(facebookIcon);
        expect(mockOnPressFacebook).toHaveBeenCalledTimes(1);
    });

    test('ensure screenTitle works correctly', () => {
        const { getByTestId } = render(
            <LoginTemplate
                onSubmitForm={mockOnPress}
                onPressGoogle={mockOnPressGoogle}
                onPressFacebook={mockOnPressFacebook}
                onPressLinkedin={mockOnPressLinked}
                onPressForgotPassword={mockOnPressForgotPassword}
                onPressNavigateSignup={mockOnPressNavigateSignup}
                testID={'template-loginTemplate'}
            />
        );

        const screenTitle = getByTestId('template-loginTemplate-screenTitile');
        expect(screenTitle).toHaveTextContent('LOGIN');
    });

    test('ensure loginDivider works correctly', () => {
        const { getByTestId } = render(
            <LoginTemplate
                onSubmitForm={mockOnPress}
                onPressGoogle={mockOnPressGoogle}
                onPressFacebook={mockOnPressFacebook}
                onPressLinkedin={mockOnPressLinked}
                onPressForgotPassword={mockOnPressForgotPassword}
                onPressNavigateSignup={mockOnPressNavigateSignup}
                testID={'template-loginTemplate'}
            />
        );

        const loginDivider = getByTestId('template-loginTemplate-divider');
        expect(loginDivider).toHaveTextContent('OR');
    });

    test('ensure loginLabel works correctly', () => {
        const { getByTestId } = render(
            <LoginTemplate
                onSubmitForm={mockOnPress}
                onPressGoogle={mockOnPressGoogle}
                onPressFacebook={mockOnPressFacebook}
                onPressLinkedin={mockOnPressLinked}
                onPressForgotPassword={mockOnPressForgotPassword}
                onPressNavigateSignup={mockOnPressNavigateSignup}
                testID={'template-loginTemplate'}
            />
        );

        const loginLabel = getByTestId('template-loginTemplate-label');
        expect(loginLabel).toHaveTextContent('Need an account?');
    });
    test('ensure loginLink works correctly', () => {
        const { getByTestId } = render(
            <LoginTemplate
                onSubmitForm={mockOnPress}
                onPressGoogle={mockOnPressGoogle}
                onPressFacebook={mockOnPressFacebook}
                onPressLinkedin={mockOnPressLinked}
                onPressForgotPassword={mockOnPressForgotPassword}
                onPressNavigateSignup={mockOnPressNavigateSignup}
                testID={'template-loginTemplate'}
            />
        );

        const loginLink = getByTestId('template-loginTemplate-link');
        expect(loginLink).toHaveTextContent('SIGN UP');
        fireEvent.press(loginLink);
        expect(mockOnPress).toHaveBeenCalledTimes(1);
    });
});
