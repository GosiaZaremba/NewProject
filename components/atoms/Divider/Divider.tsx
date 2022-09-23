import React from 'react';
import {Text, View} from 'react-native';
import styles from './Divider.styles';

export type Props = {
  text: string;
};

export const Divider: React.FC<Props> = ({text}) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Text>{text}</Text>
      </View>
    </View>
  );
};
