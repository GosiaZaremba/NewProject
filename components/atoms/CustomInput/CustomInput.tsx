import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {TextInput} from 'react-native';
import styles from './CustomInput.styles';

export type Props = {
  placeholder: string;
  secureTextEntry: boolean;
};

export type CustomInputReference = {
  getValue: () => string;
  focus: () => void;
};

const CustomInputWithReference: React.ForwardRefRenderFunction<
  CustomInputReference,
  Props
> = ({placeholder, secureTextEntry}, ref) => {
  const [value, setValue] = useState<string>('');

  const inputReference = useRef<TextInput>(null);

  const onChangeText = (value: string) => {
    setValue(value);
  };

  useImperativeHandle(ref, () => ({
    getValue: () => {
      console.log('cośjeszcze', value);
      return value;
    },
    focus: () => {
      inputReference?.current?.focus();
    },
  }));

  return (
    <TextInput
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={value}
      style={styles.input}
      ref={inputReference}
    />
  );
};

export const CustomInput = forwardRef(CustomInputWithReference);
