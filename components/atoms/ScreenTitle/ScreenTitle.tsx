import React from 'react';
import {View, Text} from 'react-native';

export type Props = {
  screenTitle: string;
};

export const ScreenTitle: React.FC<Props> = ({screenTitle}) => {
  return (
    <View>
      <Text>{screenTitle}</Text>
    </View>
  );
};
