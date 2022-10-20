import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { CustomSwitchLabel } from './CustomSwitchLabel';
import { Colors } from '../../../constants/colors';

describe('Molecule SwitchLabel', () => {
    test('Component Snapshot', () => {
        const tree = renderer
            .create(
                <CustomSwitchLabel
                    trackColorFalse={Colors.grey}
                    trackColorTrue={Colors.pink}
                    thumbColorOn={Colors.grey}
                    thumbColorOff={Colors.grey}
                    labelText={'Molecule switch label'}
                    testID={'molecule-switchLabel'}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('ensure variants works correctly', () => {
        const { getByTestId } = render(
            <CustomSwitchLabel
                trackColorFalse={Colors.grey}
                trackColorTrue={Colors.pink}
                thumbColorOn={Colors.grey}
                thumbColorOff={Colors.grey}
                labelText={'Molecule switch label'}
                testID={'molecule-switchLabel'}
            />
        );
        const customSwitchLabel = getByTestId('molecule-switchLabel');
        // fireEvent.changeText(customInputLabel, '123');
        // expect(customInputLabel.props.value).toBe('123');
        // expect(customInputLabel.props.placeholder).toEqual('Custom InputLabel');
        // expect(customInputLabel.props.secureTextEntry).toEqual(false);
        // expect(customInput.props.onChangeText()).toHaveReturned();
        // console.log(customSwitchLabel.props);
    });
});
