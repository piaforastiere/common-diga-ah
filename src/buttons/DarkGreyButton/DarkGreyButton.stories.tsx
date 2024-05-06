import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import DarkGreyButton from './DarkGreyButton';
import { DarkGreyButtonProps } from 'types';

export default {
  title: 'Components/Buttons/DarkGreyButton',
  component: DarkGreyButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<DarkGreyButtonProps> = (args: DarkGreyButtonProps) => (
  <DarkGreyButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Click Me',
  width: 200,
  isDisabled: false,
  buttonClass: 'custom-button-class',
  type: 'button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  isDisabled: true,
  children: 'Disabled',
};
