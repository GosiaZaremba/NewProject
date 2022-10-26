import React from 'react';
import { View } from 'react-native';
import { Colors } from '../../../constants/colors';
import { Label, ScreenTitle, Link, Divider } from '../../atoms';
import { SocialLogin } from '../../organisms/SocialLogin/SocialLogin';
import { LoginForm } from '../../organisms';
import styles from './LoginTemplate.styles';

export type Props = {
    onSubmitForm: (
        email: string,
        password: string,
        rememberMe: boolean | undefined
    ) => void;
    testID?: string;
    onPressGoogle: () => void;
    onPressFacebook: () => void;
    onPressForgotPassword: () => void;
    onPressNavigateSignup: () => void;
    onPressLinkedin: () => void;
};

export const LoginTemplate: React.FC<Props> = ({
    onSubmitForm,
    onPressFacebook,
    onPressGoogle,
    onPressForgotPassword,
    onPressNavigateSignup,
    onPressLinkedin,
    testID,
}) => {
    return (
        <View style={styles.mainContainer}>
            <ScreenTitle
                screenTitle={'LOGIN'}
                testID={`${testID}-screenTitile`}
            />
            <LoginForm onSubmitForm={onSubmitForm} testID={`${testID}`} />
            <View style={styles.link}>
                <Link
                    text={'Forgot Password?'}
                    onPress={onPressForgotPassword}
                    testID={`${testID}`}
                />
            </View>
            <View style={styles.divider}>
                <Divider text={'OR'} testID={`${testID}-divider`} />
            </View>
            <SocialLogin
                onPressFacebook={onPressFacebook}
                onPressGoogle={onPressGoogle}
                onPressLinkedin={onPressLinkedin}
                testID={`${testID}`}
            />
            <View style={styles.footer}>
                <Label text={'Need an account? '} testID={`${testID}-label`} />
                <Link
                    text={'SIGN UP'}
                    onPress={onPressNavigateSignup}
                    testID={`${testID}-link`}
                />
            </View>
        </View>
    );
};
