import React from 'react';
import { Text } from 'react-native';
import styles from './Link.styles';

export type Props = {
    text: string;
    onPress: () => void;
    testID?: string;
};

export const Link: React.FC<Props> = ({ text, onPress, testID }) => {
    return (
        <Text onPress={onPress} style={styles.text} testID={testID}>
            {text}
        </Text>
    );
};
