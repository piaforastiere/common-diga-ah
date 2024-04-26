import React, { ChangeEvent, SetStateAction, Dispatch } from 'react';

import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';

import { Input } from '../..';
import { translateFieldName } from '../../forms/utils';

const PasswordInput = ({
  fieldName,
  fieldValue,
  showPassword,
  showPasswordConfirm,
  handleChange,
  setShowPassword,
  setShowPasswordConfirm,
}: {
  fieldName: string;
  fieldValue: string;
  showPassword: boolean;
  showPasswordConfirm: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  setShowPasswordConfirm: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="content-password">
      <Input
        id={`${fieldName}register`}
        name={fieldName}
        type={
          (fieldName === 'password' && !showPassword) ||
          (fieldName === 'confirmPassword' && !showPasswordConfirm)
            ? 'password'
            : 'text'
        }
        placeholder={translateFieldName(fieldName)
          .replace(/([A-Z])/g, ' $1')
          .trim()}
        value={fieldValue}
        onChange={handleChange}
        full={fieldValue}
      />
      {fieldName === 'password' ? (
        !showPassword ? (
          <RiEyeCloseLine
            color={'#8E92BC'}
            size={'24'}
            onClick={() => setShowPassword(true)}
          />
        ) : (
          <RiEyeLine
            color={'#8E92BC'}
            size={'24'}
            onClick={() => setShowPassword(false)}
          />
        )
      ) : fieldName === 'confirmPassword' ? (
        !showPasswordConfirm ? (
          <RiEyeCloseLine
            color={'#8E92BC'}
            size={'24'}
            onClick={() => setShowPasswordConfirm(true)}
          />
        ) : (
          <RiEyeLine
            color={'#8E92BC'}
            size={'24'}
            onClick={() => setShowPasswordConfirm(false)}
          />
        )
      ) : null}
    </div>
  );
};

export default PasswordInput;
