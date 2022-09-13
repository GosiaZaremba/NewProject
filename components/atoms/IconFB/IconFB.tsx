import React from 'react';
import {View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './IconFB.styles';

export type Props = {
  onPressFacebook: () => void;
};

export const IconFB: React.FC<Props> = ({onPressFacebook}) => {
  return (
    <Pressable
      onPress={onPressFacebook}
      hitSlop={5}
      style={({pressed}) => (pressed ? styles.pressed : styles.pressable)}>
      <Icon name="facebook-with-circle" style={styles.iconFB}></Icon>
    </Pressable>
  );
};
