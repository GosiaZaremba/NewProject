import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { CustomInputLabel } from './CustomInputLabel';

describe('Atom Input', () => {
    test('Component Snapshot', () => {
        const tree = renderer
            .create(
                <CustomInputLabel
                    placeholder={'Custom Input'}
                    secureTextEntry={false}
                    testID={'molecule-inputLabel'}
                    labelText={'LabelText'}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('ensure variants works correctly', () => {
        const { getByTestId } = render(
            <CustomInputLabel
                placeholder={'Custom Input'}
                secureTextEntry={false}
                testID={'molecule-inputLabel'}
                labelText={'LabelText'}
            />
        );
        const customInput = getByTestId('molecule-inputLabel');
        fireEvent.changeText(customInput, '123');
        expect(customInput.props.value).toBe('123');
        expect(customInput.props.placeholder).toEqual('Custom Input');
        expect(customInput.props.secureTextEntry).toEqual(false);
        // expect(customInput.props.onChangeText()).toHaveReturned();
        // console.log(customInput.props.ref);
    });
});
