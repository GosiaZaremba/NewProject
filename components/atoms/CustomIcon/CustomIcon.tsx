import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './CustomIcon.styles';

export type Props = {
  onPressIcon: () => void;
  iconColor: string;
  iconName: string;
};

export const CustomIcon: React.FC<Props> = ({
  onPressIcon,
  iconColor,
  iconName,
}) => {
  return (
    <Pressable
      onPress={onPressIcon}
      hitSlop={5}
      style={({pressed}) => (pressed ? styles.pressed : styles.pressable)}>
      <Icon name={iconName} style={styles.iconFB} color={iconColor}></Icon>
    </Pressable>
  );
};
