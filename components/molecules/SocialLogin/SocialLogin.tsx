import React from 'react';
import {View} from 'react-native';
import {IconFB, IconGoogle} from '../../atoms';
import styles from './SocialLogin.styles';

export type Props = {
  onPressGoogle: () => void;
  onPressFacebook: () => void;
  iconFBColor: string;
  iconGoogleColor: string;
};

export const SocialLogin: React.FC<Props> = ({
  onPressFacebook,
  onPressGoogle,
  iconFBColor,
  iconGoogleColor,
}) => {
  return (
    <View style={styles.socialContainer}>
      <IconFB
        onPressFacebook={onPressFacebook}
        iconFBColor={iconFBColor}></IconFB>
      <IconGoogle
        onPressGoogle={onPressGoogle}
        iconGoogleColor={iconGoogleColor}></IconGoogle>
    </View>
  );
};
