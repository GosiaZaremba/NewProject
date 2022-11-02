import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { CustomInput, CustomInputReference } from './CustomInput';

describe('Atom Input', () => {
    test('Component Snapshot', () => {
        const tree = renderer
            .create(
                <CustomInput
                    placeholder={'Custom Input'}
                    secureTextEntry={false}
                    testID={'atom-input'}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('ensure variants works correctly', () => {
        const { getByTestId } = render(
            <CustomInput
                placeholder={'Custom Input'}
                secureTextEntry={false}
                testID={'atom-input'}
            />
        );
        const customInput = getByTestId('atom-input');
        fireEvent.changeText(customInput, '123');
        expect(customInput.props.value).toBe('123');
        expect(customInput.props.placeholder).toBe('Custom Input');
        expect(customInput.props.secureTextEntry).toBe(false);
    });

    test('ensure reference is passed', () => {
        const inputRef = React.createRef<CustomInputReference>();
        const { getByTestId } = render(
            <CustomInput
                placeholder={'Custom Input'}
                secureTextEntry={false}
                testID={'atom-input'}
                ref={inputRef}
            />
        );
        const customInput = getByTestId('atom-input');
        fireEvent.changeText(customInput, 'input content');
        expect(inputRef.current?.getValue()).toBe('input content');
        fireEvent(customInput, 'inputRef.current?.focus()');
        // fireEvent(customInput, 'inputRef.current?.isFocused()');
        inputRef.current?.focus();
        // expect(inputRef.current?.focus()).toBeUndefined();
        // console.log(inputRef.current?.isFocused());
    });
});
