import React from 'react';
import Wrapper from '../../components/organisms/Wrapper';

import { Story, Meta } from '@storybook/react/types-6-0';

import Test from '../../pages/test';

export default {
  title: 'Views/Test',
  component: Test
} as Meta;

const Template: Story = (args) => <Test {...args} />;

export const TestView = Template.bind({});
