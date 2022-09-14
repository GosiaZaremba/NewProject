import React from 'react';
import {View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './IconGoogle.styles';

export type Props = {
  onPressGoogle: () => void;
  iconGoogleColor: string;
};

export const IconGoogle: React.FC<Props> = ({
  onPressGoogle,
  iconGoogleColor,
}) => {
  return (
    <Pressable
      onPress={onPressGoogle}
      hitSlop={5}
      style={({pressed}) => (pressed ? styles.pressed : styles.pressable)}>
      <Icon
        name="google"
        style={styles.iconGoogle}
        color={iconGoogleColor}></Icon>
    </Pressable>
  );
};
