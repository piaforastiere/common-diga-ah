import React, { useState, useEffect, ChangeEvent } from 'react';

import 'react-phone-number-input/style.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';

import { InputPhoneProps } from '../../types';

import { ContentPhone } from './styles';

const InputPhone = ({
  name,
  placeholder,
  value: propValue,
  onChange,
  setPhoneValid,
  full,
}: InputPhoneProps) => {
  const [value, setValue] = useState<string | undefined>(
    propValue ? String(propValue) : undefined
  );
  const [isNumberValid, setIsNumberValid] = useState(true);

  useEffect(() => {
    setValue(propValue ? String(propValue) : undefined);
  }, [propValue]);

  const handleOnChange = (phone?: string) => {
    setValue(phone);
    const valid = phone ? isValidPhoneNumber(phone) : false;
    setIsNumberValid(valid);
    setPhoneValid && setPhoneValid(!valid);

    if (onChange && name) {
      onChange({
        target: {
          name,
          value: phone || '',
        },
      } as ChangeEvent<HTMLInputElement>);
    }
  };
  return (
    <ContentPhone full={full}>
      <PhoneInput
        international
        defaultCountry="ES"
        autoComplete="tel"
        countryOptionsOrder={['ES', 'US', 'AR', 'FR', '|', '...']}
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
        className="input-react-phone"
      />
      {!isNumberValid && (
        <p className="messageError">El número no es válido.</p>
      )}
    </ContentPhone>
  );
};

export default InputPhone;
