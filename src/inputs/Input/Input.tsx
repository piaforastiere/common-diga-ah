import React from 'react';

import { InputProps } from '../../types';

import { InputContainer } from './styles';

const Input = ({
  width,
  height,
  type,
  min,
  max,
  name,
  id,
  placeholder,
  value,
  defaultValue,
  inputClass,
  onChange,
  onBlur,
  onFocus,
  onClick,
  readOnly,
  full,
  disabled,
}: InputProps) => {
  return (
    <InputContainer
      width={width}
      type={type}
      min={min}
      max={max}
      name={name}
      id={id}
      placeholder={placeholder ? placeholder : value ? value : ''}
      value={value && value}
      className={inputClass}
      onChange={onChange}
      onBlur={onBlur}
      step="any"
      height={height}
      defaultValue={defaultValue}
      onFocus={onFocus}
      readOnly={readOnly}
      onClick={onClick}
      full={full}
      disabled={disabled}
    />
  );
};

export default Input;
