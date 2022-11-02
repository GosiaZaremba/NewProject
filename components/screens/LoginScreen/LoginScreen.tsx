import React from 'react';
import { LoginTemplate } from '../../templates';
export type Props = {
    testID?: string;
};
export const LoginScreen: React.FC<Props> = ({ testID }) => {
    const onSubmitForm = (
        email: string,
        password: string,
        rememberMe: boolean | undefined
    ) => {
        console.log(
            'email',
            email,
            'password',
            password,
            'rememberMe',
            rememberMe
        );
    };
    const onPressFacebook = () => {
        console.log('Login with Facebook');
    };
    const onPressGoogle = () => {
        console.log('Login with Google');
    };

    const onPressForgotPassword = () => {
        console.log('Navigating to forgot password screen');
    };

    const onPressNavigateSignup = () => {
        console.log('Navigating to signup screen');
    };
    const onPressLinkedin = () => {
        console.log('Login with Linkedin');
    };

    return (
        <LoginTemplate
            onSubmitForm={onSubmitForm}
            onPressFacebook={onPressFacebook}
            onPressGoogle={onPressGoogle}
            onPressForgotPassword={onPressForgotPassword}
            onPressNavigateSignup={onPressNavigateSignup}
            onPressLinkedin={onPressLinkedin}
            testID={'loginScreen'}
        />
    );
};
