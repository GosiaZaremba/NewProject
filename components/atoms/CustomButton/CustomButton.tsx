import React from 'react';
import {Button} from 'react-native';

export type Props = {
  title: string;
  onPress: () => void;
  color: string;
};
export const CustomButton: React.FC<Props> = ({title, onPress, color}) => {
  return <Button title={title} onPress={onPress} color={color}></Button>;
};
