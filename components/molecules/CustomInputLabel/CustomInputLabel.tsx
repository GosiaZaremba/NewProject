import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { CustomInput, CustomInputReference, Label } from '../../atoms';
import { View } from 'react-native';

export type Props = {
    labelText: string;
    placeholder: string;
    secureTextEntry: boolean;
    testID?: string;
};

export type CustomInputLabelReference = {
    getValue: () => string;
    focus: () => void;
};

export const CustomInputLabelWithReference: React.ForwardRefRenderFunction<
    CustomInputLabelReference,
    Props
> = ({ labelText, placeholder, secureTextEntry, testID }, ref) => {
    const inputReference = useRef<CustomInputReference>(null);

    useImperativeHandle(ref, () => ({
        getValue: () => {
            return inputReference.current?.getValue() || '';
        },
        focus: () => {
            inputReference?.current?.focus();
        },
    }));

    return (
        <View testID={testID}>
            <Label text={labelText} />
            <CustomInput
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                ref={inputReference}
            />
        </View>
    );
};

export const CustomInputLabel = forwardRef(CustomInputLabelWithReference);
