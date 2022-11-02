import React from 'react';
import { RegisterTemplate } from '../../templates';

export const RegisterScreen: React.FC = () => {
    const onSubmitForm = (email: string, password: string) => {
        console.log('email', email, 'password', password);
    };
    const onPressFacebook = () => {
        console.log('Login with Facebook');
    };
    const onPressGoogle = () => {
        console.log('Login with Google');
    };

    const onPressNavigateLogin = () => {
        console.log('Navigating to login screen');
    };
    const onPressLinkedin = () => {
        console.log('Login with LinkedIn');
    };

    return (
        <RegisterTemplate
            onSubmitForm={onSubmitForm}
            onPressFacebook={onPressFacebook}
            onPressGoogle={onPressGoogle}
            onPressNavigateLogin={onPressNavigateLogin}
            onPressLinkedin={onPressLinkedin}
        />
    );
};
