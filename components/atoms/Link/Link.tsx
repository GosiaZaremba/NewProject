import React from 'react';
import {Text} from 'react-native';
import styles from './Link.styles';

export type Props = {
  text: string;
  onPress: () => void;
};

export const Link: React.FC<Props> = ({text, onPress}) => {
  return (
    <Text onPress={onPress} style={styles.text}>
      {text}
    </Text>
  );
};
