import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';
import 'react-native';
import { RegisterForm } from './RegisterForm';

const mockOnPress = jest.fn();

describe('Organism RegisterForm', () => {
    test('Component Snapshot', () => {
        const tree = renderer
            .create(<RegisterForm onSubmitForm={mockOnPress} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('ensure submit button works correctly', () => {
        const { getByTestId } = render(
            <RegisterForm onSubmitForm={mockOnPress} />
        );

        const submitButton = getByTestId('organisms-registerForm-button');
        fireEvent.press(submitButton);
        expect(mockOnPress).toHaveBeenCalledTimes(1);
        expect(submitButton).toHaveTextContent('SIGN UP');
    });

    test('ensure email input works correctly', () => {
        const { getByTestId } = render(
            <RegisterForm onSubmitForm={mockOnPress} />
        );

        const inputEmail = getByTestId('organisms-registerForm-email-input');
        fireEvent.changeText(inputEmail, 'mail@wp.pl');
        expect(inputEmail.props.value).toBe('mail@wp.pl');
    });

    test('ensure password input works correctly', () => {
        const { getByTestId } = render(
            <RegisterForm onSubmitForm={mockOnPress} />
        );

        const inputPassword = getByTestId(
            'organisms-registerForm-password-input'
        );
        fireEvent.changeText(inputPassword, 'haslo');
        expect(inputPassword.props.value).toBe('haslo');
    });

    test('ensure onSubmitForm works correctly', () => {
        const { getByTestId } = render(
            <RegisterForm onSubmitForm={mockOnPress} />
        );

        const inputPassword = getByTestId(
            'organisms-registerForm-password-input'
        );
        const inputEmail = getByTestId('organisms-registerForm-email-input');
        const submitButton = getByTestId('organisms-registerForm-button');
        fireEvent.changeText(inputPassword, 'haslo');
        fireEvent.changeText(inputEmail, 'mail@wp.pl');
        fireEvent.press(submitButton);
        expect(mockOnPress).toHaveBeenCalledWith('mail@wp.pl', 'haslo');
    });
});
