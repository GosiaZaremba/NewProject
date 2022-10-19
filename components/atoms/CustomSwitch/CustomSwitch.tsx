import React, {
    forwardRef,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import { Switch } from 'react-native';

export type Props = {
    trackColorFalse: string;
    trackColorTrue: string;
    thumbColorOn: string;
    thumbColorOff: string;
    testID?: string;
    ref: boolean;
};

export type CustomSwitchReference = {
    getValue: () => boolean;
    focus: () => void;
};

export const CustomSwitchWithReference: React.ForwardRefRenderFunction<
    CustomSwitchReference,
    Props
> = (
    { trackColorFalse, trackColorTrue, thumbColorOn, thumbColorOff, testID },
    ref
) => {
    const [remember, setRemember] = useState<boolean>(false);

    const switchReference = useRef<Switch>(null);

    const toggleSwitch = () => setRemember((remember) => !remember);

    useImperativeHandle(ref, () => ({
        getValue: () => {
            return remember;
        },
        focus: () => {
            switchReference?.current?.focus();
        },
    }));
    return (
        <Switch
            trackColor={{ false: trackColorFalse, true: trackColorTrue }}
            thumbColor={remember ? thumbColorOn : thumbColorOff}
            onValueChange={toggleSwitch}
            value={remember}
            ref={switchReference}
            testID={testID}
        />
    );
};

export const CustomSwitch = forwardRef(CustomSwitchWithReference);
