import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';
import 'react-native';
import { LoginScreen } from './LoginScreen';

describe('Screen LoginScreen', () => {
    test('Component Snapshot', () => {
        const tree = renderer.create(<LoginScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('ensure login form works correctly', () => {
        const { getByTestId } = render(<LoginScreen />);

        const loginSwitch = getByTestId('organism-loginForm-switch');
        const inputPassword = getByTestId('organism-loginForm-password-input');
        const inputEmail = getByTestId('organism-loginForm-email-input');
        const submitButton = getByTestId('organism-loginForm-button');

        fireEvent.changeText(inputPassword, 'hasloLogin');
        fireEvent.changeText(inputEmail, 'login@wp.pl');
        fireEvent(loginSwitch, 'onValueChange', { value: true });
        fireEvent.press(submitButton);
    });

    test('ensure social login icons correctly', () => {
        const { getByTestId } = render(<LoginScreen />);

        const googleIcon = getByTestId('templates-loginTemplate-google-icon');
        const facebookIcon = getByTestId(
            'templates-loginTemplate-facebook-icon'
        );
        const linkedInIcon = getByTestId(
            'templates-loginTemplate-linkedIn-icon'
        );

        fireEvent.press(googleIcon);
        fireEvent.press(facebookIcon);
        fireEvent.press(linkedInIcon);
    });

    test('ensure login screen links work correctly', () => {
        const { getByTestId } = render(<LoginScreen />);
        const forgotPasswordLink = getByTestId(
            'templates-loginTemplate-forgotPassword-link'
        );
        const signUpLink = getByTestId('templates-loginTemplate-signUp-link');

        fireEvent.press(forgotPasswordLink);
        fireEvent.press(signUpLink);
    });
});
