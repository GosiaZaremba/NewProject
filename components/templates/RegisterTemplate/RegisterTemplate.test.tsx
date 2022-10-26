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

        const inputEmail = getByTestId(
            'template-registerTemplate-email-input-input'
        );
        const inputPassword = getByTestId(
            'template-registerTemplate-password-input-input'
        );

        const submitButton = getByTestId(
            'template-registerTemplate-submit-button'
        );
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
                testID={'template-registerTemplate'}
            />
        );
        const linkedInIcon = getByTestId(
            'template-registerTemplate-linkedIn-icon'
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
                testID={'template-registerTemplate'}
            />
        );

        const googleIcon = getByTestId('template-registerTemplate-google-icon');
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
                testID={'template-registerTemplate'}
            />
        );

        const facebookIcon = getByTestId(
            'template-registerTemplate-facebook-icon'
        );
        expect(facebookIcon.props.style[1].fontSize).toEqual(20);
        fireEvent.press(facebookIcon);
        expect(mockOnPressFacebook).toHaveBeenCalledTimes(1);
    });

    test('ensure screenTitle works correctly', () => {
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

        const screenTitle = getByTestId(
            'template-registerTemplate-screenTitile'
        );
        expect(screenTitle).toHaveTextContent('SIGN UP');
    });

    test('ensure registerDivider works correctly', () => {
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

        const registerDivider = getByTestId(
            'template-registerTemplate-divider'
        );
        expect(registerDivider).toHaveTextContent('OR');
    });

    test('ensure registerLabel works correctly', () => {
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

        const registerLabel = getByTestId('template-registerTemplate-label');
        expect(registerLabel).toHaveTextContent('Already a user?');
    });
    test('ensure registerLink works correctly', () => {
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

        const registerLink = getByTestId('template-registerTemplate-link');
        expect(registerLink).toHaveTextContent('LOGIN');
    });
});
