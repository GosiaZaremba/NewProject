import React from 'react';
import {Image} from 'react-native';
import styles from './BottomImage.styles';

export const BottomImage: React.FC = () => {
  return (
    <Image
      source={require('../../../assets/images/1.png')}
      style={styles.bottomImage}
      resizeMode={'contain'}></Image>
  );
};
