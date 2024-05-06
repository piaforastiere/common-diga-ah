import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Input from './Input';
import { InputProps } from 'types';
import dayjs from 'dayjs';

export default {
  title: 'Components/inputs/Input',
  component: Input,
  args: {
    height: 40,
    width: '300px',
    type: 'text',
    min: 'string | number | Dayjs' as unknown as any,
    max: 'string | number | Dayjs' as unknown as any,
    name: 'text',
    id: 'text',
    placeholder: 'text',
    value: 'text',
    defaultValue: 'text',
    inputClass: 'string',
    onChange: '(e: ChangeEvent<HTMLInputElement>) => void' as unknown as any,
    onClick: '(e: MouseEvent) => void' as unknown as any,
    onBlur: '(e: FocusEvent) => void' as unknown as any,
    onFocus: '(e: FocusEvent) => void' as unknown as any,
    readOnly: 'true' as unknown as any,
    full: 'false' as unknown as any,
    disabled: 'false' as unknown as any,
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args: InputProps) => (
  <Input {...args} />
);

export const Text = Template.bind({});
Text.args = {};

export const Number = Template.bind({});
Number.args = {
  type: 'number',
  defaultValue: 1234,
};

export const Date = Template.bind({});
Date.args = {
  type: 'date',
  defaultValue: dayjs().format('YYYY/MM/DD').replaceAll('/', '-'),
};
