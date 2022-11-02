import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { CustomSwitch, CustomSwitchReference, Label } from '../../atoms';
import { View } from 'react-native';

export type Props = {
    trackColorFalse: string;
    trackColorTrue: string;
    thumbColorOn: string;
    thumbColorOff: string;
    labelText: string;
    testID?: string;
};

export type CustomSwitchLabelReference = {
    getValue: () => boolean;
};

export const CustomSwitchLabelWithReference: React.ForwardRefRenderFunction<
    CustomSwitchLabelReference,
    Props
> = (
    {
        trackColorFalse,
        trackColorTrue,
        thumbColorOn,
        thumbColorOff,
        labelText,
        testID,
    },
    ref
) => {
    const switchReference = useRef<CustomSwitchReference>(null);
    useImperativeHandle(ref, () => ({
        getValue: () => {
            return switchReference.current?.getValue() || false;
        },
    }));
    return (
        <View>
            <CustomSwitch
                trackColorFalse={trackColorFalse}
                trackColorTrue={trackColorTrue}
                thumbColorOn={thumbColorOn}
                thumbColorOff={thumbColorOff}
                ref={switchReference}
                testID={`${testID}-switch`}
            />
            <Label text={labelText} testID={`${testID}-label`} />
        </View>
    );
};

export const CustomSwitchLabel = forwardRef(CustomSwitchLabelWithReference);
