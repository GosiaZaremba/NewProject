import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer, { act } from 'react-test-renderer';
import 'react-native';
import { CustomSwitch } from './CustomSwitch';
import { Colors } from '../../../constants/colors';
import { CustomSwitchReference } from '../index';

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
        fireEvent(customSwitch, 'onValueChange', { value: true });
    });
    test('ensure reference is passed', () => {
        const switchRef = React.createRef<CustomSwitchReference>();
        const { getByTestId } = render(
            <CustomSwitch
                trackColorFalse={Colors.grey}
                trackColorTrue={Colors.pink}
                thumbColorOn={Colors.grey}
                thumbColorOff={Colors.grey}
                testID={'atom-switch'}
                ref={switchRef}
            />
        );

        const customSwitch = getByTestId('atom-switch');
        fireEvent(customSwitch, 'onValueChange', { value: true });
        expect(switchRef.current?.getValue()).toBe(true);
    });
});
