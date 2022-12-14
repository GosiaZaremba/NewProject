import React from 'react';
import { View } from 'react-native';
import { Label, ScreenTitle, Link, Divider } from '../../atoms';
import { SocialLogin } from '../../organisms/SocialLogin/SocialLogin';
import { RegisterForm } from '../../organisms';
import styles from './RegisterTemplate.styles';

export type Props = {
    onSubmitForm: (email: string, password: string) => void;
    onPressGoogle: () => void;
    onPressFacebook: () => void;
    onPressNavigateLogin: () => void;
    onPressLinkedin: () => void;
    testID?: string;
};

export const RegisterTemplate: React.FC<Props> = ({
    onSubmitForm,
    onPressFacebook,
    onPressGoogle,
    onPressNavigateLogin,
    onPressLinkedin,
    testID,
}) => {
    return (
        <View style={styles.mainContainer}>
            <ScreenTitle screenTitle={'SIGN UP'} />
            <RegisterForm onSubmitForm={onSubmitForm} />
            <View style={styles.divider}>
                <Divider text={'OR'} />
            </View>
            <SocialLogin
                onPressFacebook={onPressFacebook}
                onPressGoogle={onPressGoogle}
                onPressLinkedin={onPressLinkedin}
                testID={'templates-registerTemplate'}
            />
            <View style={styles.footer}>
                <Label text={'Already a user? '} />
                <Link
                    text={'LOGIN'}
                    onPress={onPressNavigateLogin}
                    testID={'templates-registerTemplate-navigateLogin-link'}
                />
            </View>
        </View>
    );
};
