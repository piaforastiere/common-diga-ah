import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import PasswordInput, { PasswordInputProps } from './PasswordInput';

export default {
  title: 'Components/inputs/PasswordInput',
  component: PasswordInput,
} as Meta;

const Template: StoryFn<PasswordInputProps> = args => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const handleChange =
    (field: 'password' | 'confirmPassword') =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      field === 'password' ? setPassword(value) : setConfirmPassword(value);
    };

  return (
    <>
      <PasswordInput
        fieldName="password"
        fieldValue={password}
        showPassword={showPassword}
        showPasswordConfirm={showPasswordConfirm}
        handleChange={handleChange('password')}
        setShowPassword={setShowPassword}
        setShowPasswordConfirm={setShowPasswordConfirm}
      />
      <PasswordInput
        fieldName="confirmPassword"
        fieldValue={confirmPassword}
        showPassword={showPassword}
        showPasswordConfirm={showPasswordConfirm}
        handleChange={handleChange('confirmPassword')}
        setShowPassword={setShowPassword}
        setShowPasswordConfirm={setShowPasswordConfirm}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  fieldName: 'password',
  fieldValue: '',
  showPassword: false,
  showPasswordConfirm: false,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setShowPassword: () => {},
  setShowPasswordConfirm: () => {},
};
