import React from 'react';
import {View} from 'react-native';
import {Colors} from '../../../constants/colors';
import {Label, ScreenTitle} from '../../atoms';
import {SocialLogin} from '../../organisms/SocialLogin/SocialLogin';
import {LoginArea} from '../../organisms';
import styles from './LoginTemplate.styles';

export type Props = {
  onSubmitForm: () => void;
  color: string;
  screenTitle: string;
  onPressGoogle: () => void;
  onPressFacebook: () => void;
};

export const LoginTemplate: React.FC<Props> = ({
  onSubmitForm,
  onPressFacebook,
  onPressGoogle,
  screenTitle,
}) => {
  return (
    <View>
      <View style={styles.topImageView}></View>
      <View>
        <ScreenTitle screenTitle={screenTitle} />
        <LoginArea onSubmitForm={onSubmitForm} color={Colors.pink} />
        <Label labelText="OR" />
        <SocialLogin
          onPressFacebook={onPressFacebook}
          onPressGoogle={onPressGoogle}
        />
      </View>
      <View style={styles.bottomImageView}></View>
    </View>
  );
};
