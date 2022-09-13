import React from 'react';
import {View} from 'react-native';
import {Label, ScreenTitle} from '../../atoms';
import {SocialLogin} from '../../molecules/SocialLogin/SocialLogin';
import {LoginArea} from '../../organisms';

export type Props = {
  onPress: () => void;
  color: string;
  onChangeText: () => void;
  value: string;
  screenTitle: string;
  onPressGoogle: () => void;
  onPressFacebook: () => void;
};

export const LoginTemplate: React.FC<Props> = ({
  onPress,
  color,
  onChangeText,
  value,
  onPressFacebook,
  onPressGoogle,
}) => {
  return (
    <View>
      <ScreenTitle screenTitle={'Welcome back!'} />
      <LoginArea
        onPress={onPress}
        color={color}
        onChangeText={onChangeText}
        value={value}
      />
      <Label labelText="OR" />
      <SocialLogin
        onPressFacebook={onPressFacebook}
        onPressGoogle={onPressGoogle}
      />
    </View>
  );
};
