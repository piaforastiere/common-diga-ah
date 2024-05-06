// Textarea.stories.tsx
import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { InputProps } from 'types';
import Textarea from './Textarea';

export default {
  title: 'Components/inputs/Textarea',
  component: Textarea,
} as Meta;

const Template: StoryFn<InputProps> = args => {
  const [text, setText] = useState(args.value || '');

  return (
    <Textarea {...args} value={text} onChange={e => setText(e.target.value)} />
  );
};

export const Default = Template.bind({});
Default.args = {
  width: '100%',
  height: 150,
  type: 'text',
  placeholder: 'Type something...',
  inputClass: 'custom-textarea-class', // Make sure this class exists in your styles
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  ...Default.args,
  defaultValue: 'Default value',
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  ...Default.args,
  value: 'Read-only text',
  readOnly: true,
};
