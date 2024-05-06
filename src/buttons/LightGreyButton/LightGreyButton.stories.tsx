import { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import LightGreyButton from './LightGreyButton';
import { LightGreyProps } from 'types';

export default {
  title: 'Components/Buttons/LightGreyButton',
  component: LightGreyButton,
  args: {
    children: 'Click me',
    fontSize: 14,
    fontWeight: 500,
    padding: '8px 10px',
    height: 40,
    onClick: '() => void' as unknown as any,
  },
} as Meta;

const Template: StoryFn<typeof LightGreyButton> = (args: LightGreyProps) => (
  <LightGreyButton {...args} />
);

export const Story = Template.bind({});
Story.args = {};
