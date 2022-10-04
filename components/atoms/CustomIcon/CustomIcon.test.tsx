import { render, screen } from '@testing-library/react-native';
import React from 'react';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';

import 'react-native';
import { CustomIcon } from './CustomIcon';
import { Colors } from '../../../constants/colors';

describe('Button Atom', () => {
    test('Component Snapshot', () => {
        const tree = renderer
            .create(
                <CustomIcon
                    iconColor={Colors.blue}
                    iconName={'facebook'}
                    iconSize={18}
                    iconBorderColor={Colors.blue}
                    onPressIcon={() => {}}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('ensure variants works correctly', () => {
        const { getByTestId } = render(
            <CustomIcon
                iconColor={Colors.blue}
                iconName={'facebook'}
                iconSize={18}
                iconBorderColor={Colors.blue}
                onPressIcon={() => {}}
                testID={'facebookIcon'}
            />
        );
        const customIcon = getByTestId('facebookIcon');
    });
});
