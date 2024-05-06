import React from 'react';
import { TextareaContainer } from './styles';
import { InputProps } from 'types';

const Textarea = ({
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
}: InputProps) => {
  return (
    <TextareaContainer
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
      height={height}
      defaultValue={defaultValue}
      onFocus={onFocus}
      readOnly={readOnly}
      onClick={onClick}
    />
  );
};

export default Textarea;
