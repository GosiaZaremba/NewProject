import React from 'react';
import { View } from 'react-native';
import { Colors } from '../../../constants/colors';
import { CustomIcon } from '../../atoms';
import styles from './SocialLogin.styles';

export type Props = {
    onPressGoogle: () => void;
    onPressFacebook: () => void;
    onPressLinkedin: () => void;
};

export const SocialLogin: React.FC<Props> = ({
    onPressFacebook,
    onPressGoogle,
    onPressLinkedin,
}) => {
    return (
        <View style={styles.socialContainer}>
            <CustomIcon
                onPressIcon={onPressGoogle}
                iconColor={Colors.red}
                iconName={'google'}
                iconSize={20}
                iconBorderColor={Colors.red}
                testID={'googleIcon'}
                testOnly_pressed={true}
            />
            <CustomIcon
                onPressIcon={onPressFacebook}
                iconColor={Colors.navy}
                iconName={'facebook'}
                iconSize={20}
                iconBorderColor={Colors.navy}
                testID={'facebookIcon'}
                testOnly_pressed={true}
            />
            <CustomIcon
                onPressIcon={onPressLinkedin}
                iconColor={Colors.blue}
                iconName={'linkedin'}
                iconSize={20}
                iconBorderColor={Colors.blue}
                testID={'linkedinIcon'}
                testOnly_pressed={true}
            />
        </View>
    );
};
