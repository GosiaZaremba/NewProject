import React from 'react';
import {View} from 'react-native';
import {Colors} from '../../../constants/colors';
import {CustomIcon} from '../../atoms';
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
      <View>
        <CustomIcon
          onPressIcon={onPressGoogle}
          iconColor={Colors.red}
          iconName={'google'}
        />
      </View>
      <CustomIcon
        onPressIcon={onPressFacebook}
        iconColor={Colors.navy}
        iconName={'facebook'}
      />
      <CustomIcon
        onPressIcon={onPressGoogle}
        iconColor={Colors.blue}
        iconName={'linkedin'}
      />
    </View>
  );
};
