import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { CustomInput } from './CustomInput';

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
        expect(customInput.props.placeholder).toEqual('Custom Input');
        expect(customInput.props.secureTextEntry).toEqual(false);
        // expect(customInput.props.onChangeText()).toHaveReturned();
        // console.log(customInput.props.ref);
    });
});
