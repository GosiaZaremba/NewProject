import React from 'react';
import {Image} from 'react-native';
import styles from './TopImage.styles';

export const TopImage: React.FC = () => {
  return (
    <Image
      source={require('../../../assets/images/2.png')}
      style={styles.topImage}
      resizeMode={'contain'}></Image>
  );
};
