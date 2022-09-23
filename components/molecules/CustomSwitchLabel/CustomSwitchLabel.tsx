import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {CustomSwitch, CustomSwitchReference, Label} from '../../atoms';

export type Props = {
  trackColorFalse: string;
  trackColorTrue: string;
  thumbColorOn: string;
  thumbColorOff: string;
  labelText: string;
};

export type CustomSwitchLabelReference = {
  getValue: () => boolean | undefined;
  focus: () => void;
};

export const CustomSwitchLabelWithReference: React.ForwardRefRenderFunction<
  CustomSwitchLabelReference,
  Props
> = (
  {trackColorFalse, trackColorTrue, thumbColorOn, thumbColorOff, labelText},
  ref,
) => {
  const switchReference = useRef<CustomSwitchReference>(null);
  useImperativeHandle(ref, () => ({
    getValue: () => {
      return switchReference.current?.getValue();
    },
    focus: () => {
      switchReference?.current?.focus();
    },
  }));
  return (
    <>
      <CustomSwitch
        trackColorFalse={trackColorFalse}
        trackColorTrue={trackColorTrue}
        thumbColorOn={thumbColorOn}
        thumbColorOff={thumbColorOff}
        ref={switchReference}
      />
      <Label text={labelText} />
    </>
  );
};

export const CustomSwitchLabel = forwardRef(CustomSwitchLabelWithReference);
