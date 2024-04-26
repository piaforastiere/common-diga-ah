import React, { ChangeEvent, useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import 'react-phone-number-input/style.css';
import { InputPhoneProps } from 'types';
import InputPhone from './InputPhone';


export default {
  title: 'Components/inputs/InputPhone',
  component: InputPhone,
} as Meta;

const Template: StoryFn<InputPhoneProps> = (args) => {
  const [value, setValue] = useState(args.value || '');


   const handleChange = (phone: string) => {
    setValue(phone);
    // Since args.onChange expects a ChangeEvent, create a mock event
    const eventMock = {
      target: { name: args.name, value: phone }
    } as ChangeEvent<HTMLInputElement>;
    args.onChange(eventMock);
  };
  return (
    <InputPhone
      {...args}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  name: 'phone-input',
  placeholder: 'Introduce tu número de teléfono',
  full: true,
  onChange: () => {}, 
  setPhoneValid: () => {}, 
};

export const InvalidNumber = Template.bind({});
InvalidNumber.args = {
  ...Default.args,
  value: '123', 
  setPhoneValid: (valid) => console.log(valid ? 'Valid number' : 'Invalid number'),
};

