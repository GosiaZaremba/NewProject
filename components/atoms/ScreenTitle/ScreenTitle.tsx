import React from 'react';
import {Text} from 'react-native';
import styles from './ScreenTitle.styles';

export type Props = {
  screenTitle: string;
};

export const ScreenTitle: React.FC<Props> = ({screenTitle}) => {
  return <Text>{screenTitle}</Text>;
};
