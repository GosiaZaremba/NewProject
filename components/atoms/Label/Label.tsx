import React from 'react';
import { Text } from 'react-native';
import styles from './Label.styles';

export type Props = {
    text: string;
    testID?: string;
};

export const Label: React.FC<Props> = ({ text, testID }) => {
    return (
        <Text style={styles.text} testID={testID}>
            {text}
        </Text>
    );
};
