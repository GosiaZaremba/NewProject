import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';
import 'react-native';
import { LoginForm } from './LoginForm';

const mockOnPress = jest.fn();

describe('Organism LoginForm', () => {
    test('Component Snapshot', () => {
        const tree = renderer
            .create(<LoginForm onSubmitForm={mockOnPress} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('ensure submit button works correctly', () => {
        const { getByTestId } = render(
            <LoginForm onSubmitForm={mockOnPress} />
        );

        const submitButton = getByTestId('organism-loginForm-button');
        fireEvent.press(submitButton);
        expect(mockOnPress).toHaveBeenCalledTimes(1);
        expect(submitButton).toHaveTextContent('Login');
    });

    test('ensure email input works correctly', () => {
        const { getByTestId } = render(
            <LoginForm onSubmitForm={mockOnPress} />
        );

        const inputEmail = getByTestId('organism-loginForm-email-input');
        expect(inputEmail.props.value).toBe('');
        fireEvent.changeText(inputEmail, 'mail@wp.pl');
        expect(inputEmail.props.value).toBe('mail@wp.pl');
    });

    test('ensure password input works correctly', () => {
        const { getByTestId } = render(
            <LoginForm onSubmitForm={mockOnPress} />
        );

        const inputPassword = getByTestId('organism-loginForm-password-input');
        expect(inputPassword.props.value).toBe('');
        fireEvent.changeText(inputPassword, 'haslo');
        expect(inputPassword.props.value).toBe('haslo');
    });

    test('ensure switch works correctly', () => {
        const { getByTestId } = render(
            <LoginForm onSubmitForm={mockOnPress} />
        );

        const loginSwitch = getByTestId('organism-loginForm-switch');
        expect(loginSwitch.props.value).toBe(false);
        fireEvent(loginSwitch, 'onValueChange', { value: true });
        expect(loginSwitch.props.value).toBe(true);
    });

    test('ensure onSubmitForm works correctly', () => {
        const { getByTestId } = render(
            <LoginForm onSubmitForm={mockOnPress} />
        );

        const loginSwitch = getByTestId('organism-loginForm-switch');
        const inputPassword = getByTestId('organism-loginForm-password-input');
        const inputEmail = getByTestId('organism-loginForm-email-input');
        const submitButton = getByTestId('organism-loginForm-button');
        fireEvent.changeText(inputPassword, 'haslo');
        fireEvent.changeText(inputEmail, 'mail@wp.pl');
        fireEvent(loginSwitch, 'onValueChange', { value: true });
        fireEvent.press(submitButton);
        expect(mockOnPress).toHaveBeenCalledWith('mail@wp.pl', 'haslo', true);
    });
});
