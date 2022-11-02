import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';
import 'react-native';
import { RegisterTemplate } from './RegisterTemplate';

const mockOnPress = jest.fn();
const mockOnPressGoogle = jest.fn();
const mockOnPressFacebook = jest.fn();
const mockOnPressLinked = jest.fn();
const mockOnPressNavigateLogin = jest.fn();

describe('Template RegisterTemplate', () => {
    test('Component Snapshot', () => {
        const tree = renderer
            .create(
                <RegisterTemplate
                    onSubmitForm={mockOnPress}
                    onPressGoogle={mockOnPressGoogle}
                    onPressFacebook={mockOnPressFacebook}
                    onPressLinkedin={mockOnPressLinked}
                    onPressNavigateLogin={mockOnPressNavigateLogin}
                    testID={'template-registerTemplate'}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('ensure onSubmitForm works correctly', () => {
        const { getByTestId } = render(
            <RegisterTemplate
                onSubmitForm={mockOnPress}
                onPressGoogle={mockOnPressGoogle}
                onPressFacebook={mockOnPressFacebook}
                onPressLinkedin={mockOnPressLinked}
                onPressNavigateLogin={mockOnPressNavigateLogin}
                testID={'template-registerTemplate'}
            />
        );

        const inputEmail = getByTestId('organisms-registerForm-email-input');
        const inputPassword = getByTestId(
            'organisms-registerForm-password-input'
        );

        const submitButton = getByTestId('organisms-registerForm-button');
        fireEvent.changeText(inputPassword, 'haslo');
        fireEvent.changeText(inputEmail, 'mail@wp.pl');
        fireEvent.press(submitButton);
        expect(mockOnPress).toHaveBeenCalledWith('mail@wp.pl', 'haslo');
    });

    test('ensure linkedInIcon works correctly', () => {
        const { getByTestId } = render(
            <RegisterTemplate
                onSubmitForm={mockOnPress}
                onPressGoogle={mockOnPressGoogle}
                onPressFacebook={mockOnPressFacebook}
                onPressLinkedin={mockOnPressLinked}
                onPressNavigateLogin={mockOnPressNavigateLogin}
            />
        );
        const linkedInIcon = getByTestId(
            'templates-registerTemplate-linkedIn-icon'
        );
        expect(linkedInIcon.props.style[1].fontSize).toEqual(20);
        fireEvent.press(linkedInIcon);
        expect(mockOnPressLinked).toHaveBeenCalledTimes(1);
    });

    test('ensure googleIcon works correctly', () => {
        const { getByTestId } = render(
            <RegisterTemplate
                onSubmitForm={mockOnPress}
                onPressGoogle={mockOnPressGoogle}
                onPressFacebook={mockOnPressFacebook}
                onPressLinkedin={mockOnPressLinked}
                onPressNavigateLogin={mockOnPressNavigateLogin}
            />
        );

        const googleIcon = getByTestId(
            'templates-registerTemplate-google-icon'
        );
        expect(googleIcon.props.style[1].fontSize).toEqual(20);
        fireEvent.press(googleIcon);
        expect(mockOnPressGoogle).toHaveBeenCalledTimes(1);
    });

    test('ensure facebookIcon works correctly', () => {
        const { getByTestId } = render(
            <RegisterTemplate
                onSubmitForm={mockOnPress}
                onPressGoogle={mockOnPressGoogle}
                onPressFacebook={mockOnPressFacebook}
                onPressLinkedin={mockOnPressLinked}
                onPressNavigateLogin={mockOnPressNavigateLogin}
            />
        );

        const facebookIcon = getByTestId(
            'templates-registerTemplate-facebook-icon'
        );
        expect(facebookIcon.props.style[1].fontSize).toEqual(20);
        fireEvent.press(facebookIcon);
        expect(mockOnPressFacebook).toHaveBeenCalledTimes(1);
    });

    test('ensure go to login link works correctly', () => {
        const { getByTestId } = render(
            <RegisterTemplate
                onSubmitForm={mockOnPress}
                onPressGoogle={mockOnPressGoogle}
                onPressFacebook={mockOnPressFacebook}
                onPressLinkedin={mockOnPressLinked}
                onPressNavigateLogin={mockOnPressNavigateLogin}
            />
        );

        const registerLink = getByTestId(
            'templates-registerTemplate-navigateLogin-link'
        );
        expect(registerLink).toHaveTextContent('LOGIN');
    });
});
