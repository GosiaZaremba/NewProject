import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './CustomIcon.styles';

export type Props = {
    onPressIcon: () => void;
    iconColor: string;
    iconName: string;
    iconSize: number;
    iconBorderColor: string;
    testID?: string;
    testOnly_pressed: boolean;
};

export const CustomIcon: React.FC<Props> = ({
    onPressIcon,
    iconColor,
    iconName,
    iconSize,
    iconBorderColor,
    testID,
    testOnly_pressed,
}) => {
    return (
        <Pressable
            onPress={onPressIcon}
            hitSlop={5}
            style={({ pressed }) =>
                pressed
                    ? [styles.pressed, { borderColor: iconBorderColor }]
                    : [styles.pressable, { borderColor: iconBorderColor }]
            }
            testOnly_pressed={testOnly_pressed}
            testID={`${testID}-pressable`}
        >
            <Icon
                name={iconName}
                style={{ fontSize: iconSize }}
                color={iconColor}
                testID={`${testID}-icon`}
            />
        </Pressable>
    );
};
