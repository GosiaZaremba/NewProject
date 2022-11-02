import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { Colors } from '../../../constants/colors';
import { CustomButton } from '../../atoms';
import {
    CustomInputLabel,
    CustomInputLabelReference,
    CustomSwitchLabel,
    CustomSwitchLabelReference,
} from '../../molecules';
import styles from './LoginForm.styles';

export type Props = {
    onSubmitForm: (
        email: string,
        password: string,
        rememberMe: boolean | undefined
    ) => void;
    testID?: string;
};

export const LoginForm: React.FC<Props> = ({ onSubmitForm, testID }) => {
    const emailInputReference = useRef<CustomInputLabelReference>(null);
    const passwordInputReference = useRef<CustomInputLabelReference>(null);
    const rememberMeSwitchReference = useRef<CustomSwitchLabelReference>(null);

    const onSubmit = () => {
        const emailValue = emailInputReference.current?.getValue();
        const passwordValue = passwordInputReference.current?.getValue();
        const rememberMeValue = rememberMeSwitchReference.current?.getValue();
        if (emailValue && passwordValue) {
            onSubmitForm(emailValue, passwordValue, rememberMeValue);
        } else {
            onSubmitForm('', '', rememberMeValue);
        }
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
                        testID={'organism-loginForm-email'}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <CustomInputLabel
                        labelText={'Password'}
                        placeholder={'password'}
                        secureTextEntry={true}
                        ref={passwordInputReference}
                        testID={'organism-loginForm-password'}
                    />
                </View>
            </View>
            <View style={styles.switch}>
                <CustomSwitchLabel
                    trackColorFalse={Colors.grey}
                    trackColorTrue={Colors.grey}
                    thumbColorOn={Colors.pink}
                    thumbColorOff={Colors.grey}
                    labelText={'Remember me?'}
                    ref={rememberMeSwitchReference}
                    testID={'organism-loginForm'}
                />
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton
                    title={'Login'}
                    onPress={onSubmit}
                    color={Colors.pink}
                    testID={'organism-loginForm-button'}
                />
            </View>
        </View>
    );
};
