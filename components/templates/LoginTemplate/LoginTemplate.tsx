import React from 'react';
import {View} from 'react-native';
import {Colors} from '../../../constants/colors';
import {BottomImage, Label, ScreenTitle, TopImage} from '../../atoms';
import {SocialLogin} from '../../molecules/SocialLogin/SocialLogin';
import {LoginArea} from '../../organisms';
import styles from './LoginTemplate.styles';

export type Props = {
  onPress: () => void;
  color: string;
  onChangeText: () => void;
  value: string;
  screenTitle: string;
  onPressGoogle: () => void;
  onPressFacebook: () => void;
  iconFBColor: string;
};

export const LoginTemplate: React.FC<Props> = ({
  onPress,
  onChangeText,
  value,
  onPressFacebook,
  onPressGoogle,
}) => {
  return (
    <View>
      <View style={styles.topImageView}>
        <TopImage />
      </View>
      <View>
        <ScreenTitle screenTitle={'Welcome back!'} />
        <LoginArea
          onPress={onPress}
          color={Colors.three}
          onChangeText={onChangeText}
          value={value}
        />
        <Label labelText="OR" />
        <SocialLogin
          onPressFacebook={onPressFacebook}
          onPressGoogle={onPressGoogle}
          iconFBColor={Colors.two}
          iconGoogleColor={Colors.two}
        />
      </View>
      <View style={styles.bottomImageView}>
        <BottomImage />
      </View>
    </View>
  );
};
