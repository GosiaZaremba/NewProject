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
}) => {
    return (
        <View style={styles.mainContainer}>
            <ScreenTitle screenTitle={'LOGIN'} />
            <LoginForm
                onSubmitForm={onSubmitForm}
                testID={'templates-loginTemplate'}
            />
            <View style={styles.link}>
                <Link
                    text={'Forgot Password?'}
                    onPress={onPressForgotPassword}
                    testID={'templates-loginTemplate-forgotPassword-link'}
                />
            </View>
            <View style={styles.divider}>
                <Divider text={'OR'} />
            </View>
            <SocialLogin
                onPressFacebook={onPressFacebook}
                onPressGoogle={onPressGoogle}
                onPressLinkedin={onPressLinkedin}
                testID={'templates-loginTemplate'}
            />
            <View style={styles.footer}>
                <Label text={'Need an account? '} />
                <Link
                    text={'SIGN UP'}
                    onPress={onPressNavigateSignup}
                    testID={'templates-loginTemplate-signUp-link'}
                />
            </View>
        </View>
    );
};
