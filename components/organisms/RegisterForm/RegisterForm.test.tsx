import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer, { act } from 'react-test-renderer';
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

    test('ensure variants works correctly', () => {
        const { getByTestId } = render(
            <RegisterForm onSubmitForm={mockOnPress} />
        );

        // const inputEmail = getByTestId('email-input-input');
        // const inputPassword = getByTestId('password-input-input');
        // fireEvent.changeText(inputEmail, 'mail@wp.pl');
        // expect(inputEmail.props.value).toBe('mail@wp.pl');
        // fireEvent.changeText(inputPassword, 'haslo');
        // expect(inputPassword.props.value).toBe('haslo');

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
