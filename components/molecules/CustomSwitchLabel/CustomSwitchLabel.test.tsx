import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { CustomSwitchLabel } from './CustomSwitchLabel';
import { Colors } from '../../../constants/colors';
import { CustomSwitchReference } from '../../atoms';

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
                    testID={'molecule'}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('ensure component renders correctly', () => {
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
        const customSwitchLabel = getByTestId('molecule-switchLabel-switch');
        fireEvent(customSwitchLabel, 'onValueChange', {
            value: true,
        });
        const label = getByTestId('molecule-switchLabel-label');
        expect(label.props.children).toBe('Molecule switch label');
        expect(customSwitchLabel.props.thumbTintColor).toBe(Colors.grey);
        expect(customSwitchLabel.props.tintColor).toBe(Colors.grey);
        expect(customSwitchLabel.props.onTintColor).toBe(Colors.pink);
    });

    test('ensure reference is passed', () => {
        const customSwitchLabelRef = React.createRef<CustomSwitchReference>();
        const { getByTestId } = render(
            <CustomSwitchLabel
                trackColorFalse={Colors.grey}
                trackColorTrue={Colors.pink}
                thumbColorOn={Colors.grey}
                thumbColorOff={Colors.grey}
                labelText={'Molecule switch label'}
                testID={'molecule-switchLabel'}
                ref={customSwitchLabelRef}
            />
        );
        const customSwitchLabel = getByTestId('molecule-switchLabel-switch');
        fireEvent(customSwitchLabel, 'onValueChange', {
            value: true,
        });
        expect(customSwitchLabelRef.current?.getValue()).toBe(true);
        const label = getByTestId('molecule-switchLabel-label');
        expect(label.props.children).toBe('Molecule switch label');
    });
});
