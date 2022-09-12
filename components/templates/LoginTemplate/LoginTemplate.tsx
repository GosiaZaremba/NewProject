import React from 'react';
import {View} from 'react-native';
import {ScreenTitle} from '../../atoms';
import {LoginArea} from '../../organisms';

export type Props = {
  onPress: () => void;
  color: string;
  onChangeText: () => void;
  value: string;
  screenTitle: string;
};

export const LoginTemplate: React.FC<Props> = ({
  onPress,
  color,
  onChangeText,
  value,
}) => {
  return (
    <View>
      <ScreenTitle screenTitle={'Please log in'}></ScreenTitle>
      <LoginArea
        onPress={onPress}
        color={color}
        onChangeText={onChangeText}
        value={value}></LoginArea>
    </View>
  );
};
