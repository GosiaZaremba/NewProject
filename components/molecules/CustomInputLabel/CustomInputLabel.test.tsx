import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';
import { CustomInputLabel } from './CustomInputLabel';
import { CustomInputReference } from '../../atoms/CustomInput/CustomInput';

describe('Molecule InputLabel', () => {
    test('Component Snapshot', () => {
        const tree = renderer
            .create(
                <CustomInputLabel
                    placeholder={'Custom InputLabel'}
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
                placeholder={'Custom InputLabel'}
                secureTextEntry={false}
                testID={'molecule-inputLabel'}
                labelText={'LabelText'}
            />
        );
        const label = getByTestId('molecule-inputLabel-label');
        const input = getByTestId('molecule-inputLabel-input');
        expect(label.props.children).toBe('LabelText');
        expect(input.props.placeholder).toBe('Custom InputLabel');
    });

    test('ensure referance is passed', () => {
        const inputLabelRef = React.createRef<CustomInputReference>();
        const { getByTestId } = render(
            <CustomInputLabel
                placeholder={'Custom InputLabel'}
                secureTextEntry={false}
                testID={'molecule-inputLabel'}
                labelText={'LabelText'}
                ref={inputLabelRef}
            />
        );
        const input = getByTestId('molecule-inputLabel-input');
        fireEvent.changeText(input, 'input content');
        expect(inputLabelRef.current?.getValue()).toBe('input content');
    });
});
