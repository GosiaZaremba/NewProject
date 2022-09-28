import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CustomIcon } from './CustomIcon';
import { Colors } from '../../../constants/colors';

export default {
    title: 'components/atoms/CustomIcon/CustomIcon',
    component: CustomIcon,
} as ComponentMeta<typeof CustomIcon>;

export const Basic: ComponentStory<typeof CustomIcon> = (args) => (
    <CustomIcon {...args} />
);

Basic.args = {};
