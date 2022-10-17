import React from 'react';
import { Text, View } from 'react-native';
import styles from './Divider.styles';

export type Props = {
    text: string;
    testID?: string;
};

export const Divider: React.FC<Props> = ({ text, testID }) => {
    return (
        <View style={styles.outerContainer}>
            <View testID={testID} style={styles.innerContainer}>
                <Text>{text}</Text>
            </View>
        </View>
    );
};
