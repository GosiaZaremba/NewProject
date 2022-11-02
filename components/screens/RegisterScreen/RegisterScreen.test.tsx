import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';
import 'react-native';
import { RegisterScreen } from './RegisterScreen';

describe('Screen RegisterScreen', () => {
    test('Component Snapshot', () => {
        const tree = renderer.create(<RegisterScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('ensure login form works correctly', () => {
        const { getByTestId } = render(<RegisterScreen />);

        const inputPassword = getByTestId(
            'organisms-registerForm-password-input'
        );
        const inputEmail = getByTestId('organisms-registerForm-email-input');
        const submitButton = getByTestId('organisms-registerForm-button');

        fireEvent.changeText(inputPassword, 'hasloRegister');
        fireEvent.changeText(inputEmail, 'register@wp.pl');
        fireEvent.press(submitButton);
    });

    test('ensure social icons work correctly', () => {
        const { getByTestId } = render(<RegisterScreen />);

        const googleIcon = getByTestId(
            'templates-registerTemplate-google-icon'
        );

        const facebookIcon = getByTestId(
            'templates-registerTemplate-facebook-icon'
        );
        const linkedInIcon = getByTestId(
            'templates-registerTemplate-linkedIn-icon'
        );
        fireEvent.press(googleIcon);
        fireEvent.press(facebookIcon);
        fireEvent.press(linkedInIcon);

        const navigateLoginLink = getByTestId(
            'templates-registerTemplate-navigateLogin-link'
        );
        fireEvent.press(navigateLoginLink);
    });

    test('ensure register screen links work correctly', () => {
        const { getByTestId } = render(<RegisterScreen />);

        const navigateLoginLink = getByTestId(
            'templates-registerTemplate-navigateLogin-link'
        );
        fireEvent.press(navigateLoginLink);
    });
});
