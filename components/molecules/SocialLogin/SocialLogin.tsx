import React from 'react';
import {View} from 'react-native';
import {IconFB, IconGoogle} from '../../atoms';
import styles from './SocialLogin.styles';

export type Props = {
  onPressGoogle: () => void;
  onPressFacebook: () => void;
};

export const SocialLogin: React.FC<Props> = ({
  onPressFacebook,
  onPressGoogle,
}) => {
  return (
    <View style={styles.socialContainer}>
      <IconFB onPressFacebook={onPressFacebook}></IconFB>
      <IconGoogle onPressGoogle={onPressGoogle}></IconGoogle>
    </View>
  );
};
