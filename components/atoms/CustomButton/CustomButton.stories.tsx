import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {CustomButton} from './CustomButton';
import {Colors} from '../../../constants/colors';

export default {
  title: 'components/atoms/CustomButton/CustomButton',
  component: CustomButton,
} as ComponentMeta<typeof CustomButton>;

export const Basic: ComponentStory<typeof CustomButton> = args => (
  <CustomButton {...args} />
);

Basic.args = {
    title: 'Button title',
    color: Colors.pink,
    accessibilityLabel: 'Button title',
};
