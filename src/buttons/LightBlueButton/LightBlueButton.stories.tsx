import { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import LightBlueButton from './LightBlueButton';
import { LightBlueProps } from 'types';

export default {
  title: 'Components/Buttons/LightBlueButton',
  component: LightBlueButton,
  args: {
    children: 'Click Me',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 14,
    buttonClass: 'string',
    height: 40,
    onClick: '() => void' as unknown as any,
  },
} as Meta;

const Template: StoryFn<typeof LightBlueButton> = (args: LightBlueProps) => (
  <LightBlueButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Click Me',
  isDisabled: false,
  buttonClass: 'custom-button-class',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  isDisabled: true,
  children: 'Disabled',
};
