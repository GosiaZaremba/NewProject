import React from 'react';
import {Text} from 'react-native';
import styles from './Label.styles';

export type Props = {
  text: string;
};

export const Label: React.FC<Props> = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};
