import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { CustomButton } from './CustomButton';
import { Colors } from '../../../constants/colors';

storiesOf('atoms/CustomButton', module)
    .addDecorator((story) => story())
    .add('default', () => (
        <CustomButton
            title={'Button title'}
            color={Colors.pink}
            onPress={() => {}}
        />
    ));

// export default {
//   title: 'components/atoms/CustomButton/CustomButton',
//   component: CustomButton,
// } as ComponentMeta<typeof CustomButton>;

// export const Basic: ComponentStory<typeof CustomButton> = args => (
//   <CustomButton {...args} />
// );

// Basic.args = {
//     title: 'Button title',
//     color: Colors.pink,
//     accessibilityLabel: 'Button title',
// };
