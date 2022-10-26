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
            <ScreenTitle
                screenTitle={'SIGN UP'}
                testID={`${testID}-screenTitile`}
            />
            <RegisterForm onSubmitForm={onSubmitForm} testID={`${testID}`} />
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
                <Label text={'Already a user? '} testID={`${testID}-label`} />
                <Link
                    text={'LOGIN'}
                    onPress={onPressNavigateLogin}
                    testID={`${testID}-link`}
                />
            </View>
        </View>
    );
};
