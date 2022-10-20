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
        const emailValue = emailInputReference.current?.getValue() || '';
        const passwordValue = passwordInputReference.current?.getValue() || '';
        const rememberMeValue = rememberMeSwitchReference.current?.getValue();
        // console.log(
        //   'email',
        //   emailValue,
        //   'password',
        //   passwordValue,
        //   'remember',
        //   rememberMeValue,
        // );
        onSubmitForm(emailValue, passwordValue, rememberMeValue);
    };

    return (
        <View style={styles.outerContainer} testID={testID}>
            <View style={styles.inputsContainer}>
                <View style={styles.inputContainer}>
                    <CustomInputLabel
                        labelText={'Email'}
                        placeholder={'email'}
                        secureTextEntry={false}
                        ref={emailInputReference}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <CustomInputLabel
                        labelText={'Password'}
                        placeholder={'password'}
                        secureTextEntry={true}
                        ref={passwordInputReference}
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
                />
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton
                    title={'Login'}
                    onPress={onSubmit}
                    color={Colors.pink}
                />
            </View>
        </View>
    );
};
