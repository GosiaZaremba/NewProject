import React from 'react';
import { Text } from 'react-native';
import styles from './ScreenTitle.styles';

export type Props = {
    screenTitle: string;
    testID?: string;
};

export const ScreenTitle: React.FC<Props> = ({ screenTitle, testID }) => {
    return (
        <Text style={styles.titleText} testID={testID}>
            {screenTitle}
        </Text>
    );
};
