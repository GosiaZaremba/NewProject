import React, { useRef } from 'react';
import { View, Switch } from 'react-native';
import { Colors } from '../../../constants/colors';
import {
    CustomButton,
    CustomInputReference,
    Label,
    CustomInput,
} from '../../atoms';
import styles from './RegisterForm.styles';

export type Props = {
    onSubmitForm: (email: string, password: string) => void;
};

export const RegisterForm: React.FC<Props> = ({ onSubmitForm }) => {
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
                    <Label text={'Email'} />
                    <CustomInput
                        placeholder={'email'}
                        secureTextEntry={false}
                        ref={emailInputReference}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Label text={'Password'} />
                    <CustomInput
                        placeholder={'password'}
                        secureTextEntry={true}
                        ref={passwordInputReference}
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton
                    title={'SIGN UP'}
                    onPress={onSubmit}
                    color={Colors.pink}
                />
            </View>
        </View>
    );
};
