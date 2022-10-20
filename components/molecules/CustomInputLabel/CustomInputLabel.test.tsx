import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { CustomInputLabel } from './CustomInputLabel';

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
        const customInputLabel = getByTestId('molecule-inputLabel');
        // fireEvent.changeText(customInputLabel, '123');
        // expect(customInputLabel.props.value).toBe('123');
        // expect(customInputLabel.props.placeholder).toEqual('Custom InputLabel');
        // expect(customInputLabel.props.secureTextEntry).toEqual(false);
        // expect(customInput.props.onChangeText()).toHaveReturned();
        // console.log(customInputLabel.props);
    });
});
