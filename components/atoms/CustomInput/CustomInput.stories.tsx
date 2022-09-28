import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CustomInput } from './CustomInput';
import { Colors } from '../../../constants/colors';

export default {
    title: 'components/atoms/CustomInput/CustomInput',
    component: CustomInput,
} as ComponentMeta<typeof CustomInput>;

export const Basic: ComponentStory<typeof CustomInput> = (args) => (
    <CustomInput {...args} />
);

Basic.args = {};
