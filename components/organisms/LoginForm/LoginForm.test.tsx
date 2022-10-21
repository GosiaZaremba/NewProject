import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer, { act } from 'react-test-renderer';
import 'react-native';
import { LoginForm } from './LoginForm';
import { Colors } from '../../../constants/colors';

const mockOnPress = jest.fn();

describe('Organism LoginForm', () => {
    test('Component Snapshot', () => {
        const tree = renderer
            .create(
                <LoginForm
                    onSubmitForm={mockOnPress}
                    testID={'organism-loginForm'}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('ensure variants works correctly', () => {
        const { getByTestId } = render(
            <LoginForm onSubmitForm={mockOnPress} />
        );

        const inputEmail = getByTestId('email-input-input');
        const inputPassword = getByTestId('password-input-input');
        const submitButton = getByTestId('submit-button');
        fireEvent.changeText(inputEmail, 'mail@wp.pl');
        expect(inputEmail.props.value).toBe('mail@wp.pl');
        fireEvent.changeText(inputPassword, 'haslo');
        expect(inputPassword.props.value).toBe('haslo');
        fireEvent.press(submitButton);
        expect(mockOnPress).toHaveBeenCalledTimes(1);
        expect(mockOnPress).toHaveBeenCalledWith('mail@wp.pl', 'haslo', false);

        // console.log(inputEmail);
        // console.log(inputPassword);
        // expect(loginForm.props.value).toBe(false);
        // fireEvent(loginForm, 'onValueChange', { value: true });
        // expect(customInput.props.placeholder).toEqual('Custom Input');
        // expect(customInput.props.secureTextEntry).toEqual(false);
        // expect(customInput.props.onChangeText()).toHaveReturned();
        // console.log(loginForm.props);
    });
});
