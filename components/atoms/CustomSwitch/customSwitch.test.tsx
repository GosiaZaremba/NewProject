import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { CustomSwitch } from './CustomSwitch';
import { Colors } from '../../../constants/colors';

const mockOnPress = jest.fn();

describe('Atom Switch', () => {
    test('Component Snapshot', () => {
        const tree = renderer
            .create(
                <CustomSwitch
                    trackColorFalse={Colors.grey}
                    trackColorTrue={Colors.pink}
                    thumbColorOn={Colors.grey}
                    thumbColorOff={Colors.grey}
                    testID={'atom-switch'}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('ensure variants works correctly', () => {
        const { getByTestId } = render(
            <CustomSwitch
                trackColorFalse={Colors.grey}
                trackColorTrue={Colors.pink}
                thumbColorOn={Colors.grey}
                thumbColorOff={Colors.grey}
                testID={'atom-switch'}
            />
        );
        const customSwitch = getByTestId('atom-switch');

        expect(customSwitch.props.value).toBe(false);
        // expect(customSwitch.props.onStartShouldSetResponder).toReturn();
        fireEvent(customSwitch, 'onValueChange', { value: true });
        // expect(customInput.props.placeholder).toEqual('Custom Input');
        // expect(customInput.props.secureTextEntry).toEqual(false);
        // expect(customInput.props.onChangeText()).toHaveReturned();
        console.log(customSwitch.props.onValueChange);
    });
});
