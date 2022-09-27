import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {Switch} from 'react-native';

export type Props = {
  trackColorFalse: string;
  trackColorTrue: string;
  thumbColorOn: string;
  thumbColorOff: string;
};

export type CustomSwitchReference = {
  getValue: () => boolean;
  focus: () => void;
};

export const CustomSwitchWithReference: React.ForwardRefRenderFunction<
  CustomSwitchReference,
  Props
> = ({trackColorFalse, trackColorTrue, thumbColorOn, thumbColorOff}, ref) => {
  const [remember, setRemember] = useState<boolean>(false);

  const switchReference = useRef<Switch>(null);

  const toggleSwitch = (remember: boolean) =>
    setRemember(remember => !remember);

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
      trackColor={{false: trackColorFalse, true: trackColorTrue}}
      thumbColor={remember ? thumbColorOn : thumbColorOff}
      onValueChange={toggleSwitch}
      value={remember}
      ref={switchReference}
    />
  );
};

export const CustomSwitch = forwardRef(CustomSwitchWithReference);