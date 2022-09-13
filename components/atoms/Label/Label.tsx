import React from 'react';
import {Text} from 'react-native';
import styles from './Label.styles';

export type Props = {
  labelText: string;
};

export const Label: React.FC<Props> = ({labelText}) => {
  return <Text style={styles.labelText}>{labelText}</Text>;
};
