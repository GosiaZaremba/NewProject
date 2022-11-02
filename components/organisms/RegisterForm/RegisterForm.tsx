import React, { useRef } from 'react';
import { View } from 'react-native';
import { Colors } from '../../../constants/colors';
import { CustomButton, CustomInputReference } from '../../atoms';
import { CustomInputLabel } from '../../molecules';
import styles from './RegisterForm.styles';

export type Props = {
    onSubmitForm: (email: string, password: string) => void;
    testID?: string;
};

export const RegisterForm: React.FC<Props> = ({ onSubmitForm, testID }) => {
    const emailInputReference = useRef<CustomInputReference>(null);
    const passwordInputReference = useRef<CustomInputReference>(null);

    const onSubmit = () => {
        const emailValue = emailInputReference.current?.getValue() || '';
        const passwordValue = passwordInputReference.current?.getValue() || '';
        // console.log('email', emailValue, 'password', passwordValue);
        onSubmitForm(emailValue, passwordValue);
    };

    return (
        <View style={styles.outerContainer}>
            <View style={styles.inputsContainer}>
                <View style={styles.inputContainer}>
                    <CustomInputLabel
                        labelText={'Email'}
                        placeholder={'email'}
                        secureTextEntry={false}
                        ref={emailInputReference}
                        testID={'organisms-registerForm-email'}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <CustomInputLabel
                        labelText={'Password'}
                        placeholder={'password'}
                        secureTextEntry={true}
                        ref={passwordInputReference}
                        testID={'organisms-registerForm-password'}
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton
                    title={'SIGN UP'}
                    onPress={onSubmit}
                    color={Colors.pink}
                    testID={'organisms-registerForm-button'}
                />
            </View>
        </View>
    );
};
