import React, { useEffect, useState, ChangeEvent } from 'react';

import dayjs from 'dayjs';

import { RegistrationForm } from '../../types';

import { LetterLabel } from './styles';
import { translateFieldName } from '../utils';
import { Input, InputPhone, PasswordInput, PasswordRules } from 'inputs';
import { DarkGreyButton } from 'buttons';

interface StepOneProps {
  setStepNumber: (step: number) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  formData: RegistrationForm;
}

const StepOne = ({ setStepNumber, handleChange, formData }: StepOneProps) => {
  const [passwordError, setPasswordError] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [uppercaseValid, setUppercaseValid] = useState(false);
  const [numberValid, setNumberValid] = useState(false);
  const [specialCharValid, setSpecialCharValid] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  useEffect(() => {
    setUppercaseValid(/[A-Z]/.test(formData.password));
    setNumberValid(/[0-9]/.test(formData.password));
    setSpecialCharValid(/[@$!%*?&]/.test(formData.password));
  }, [formData.password]);

  useEffect(() => {
    const isPasswordValid =
      /[A-Z]/.test(formData.password) &&
      /[0-9]/.test(formData.password) &&
      /[@$!%*?&]/.test(formData.password);
    setPasswordValid(isPasswordValid);

    const requiredFields = [
      'name',
      'lastname',
      'email',
      'phone',
      'password',
      'confirmPassword',
    ];
    const areRequiredFieldsFilled = requiredFields.every(
      field => formData[field as keyof typeof formData]
    );
    setAllFieldsFilled(areRequiredFieldsFilled);

    if (
      formData.confirmPassword !== formData.password &&
      formData.confirmPassword !== ''
    ) {
      setPasswordError('Las contraseñas no coinciden');
    } else {
      setPasswordError('');
    }
  }, [formData]);

  const nextStep = () => {
    setStepNumber(2);
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    handleChange(e);
    setEmail(value);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(value)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  return (
    <>
      <div className="reactanguloInterno">
        <div className="contentInputs-one">
          {Object.entries(formData)
            .filter(
              ([fieldName]) =>
                !['genre', 'experienceType', 'activity', 'actividad1'].includes(
                  fieldName
                )
            )
            .map(([fieldName, fieldValue]) => (
              <div key={fieldName} className="containerInput">
                <LetterLabel htmlFor={`${fieldName}register`}>
                  {translateFieldName(fieldName)}
                  {['name', 'lastName', 'email', 'phone', 'password'].includes(
                    fieldName
                  ) && <span>*</span>}
                </LetterLabel>
                {fieldName === 'birthDate' ? (
                  <Input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    defaultValue={dayjs(fieldValue)
                      .format('YYYY/MM/DD')
                      .replaceAll('/', '-')}
                    onChange={e => handleChange(e)}
                    full={fieldValue}
                  />
                ) : fieldName === 'phone' ? (
                  <InputPhone
                    id={`${fieldName}register`}
                    name={fieldName}
                    type={'tel'}
                    placeholder={translateFieldName(fieldName)
                      .replace(/([A-Z])/g, ' $1')
                      .trim()}
                    value={formData.phone}
                    onChange={handleChange}
                    width="169px"
                    setPhoneValid={setPhoneValid}
                    full={formData.phone}
                  />
                ) : fieldName === 'confirmPassword' ||
                  fieldName === 'password' ? (
                  <PasswordInput
                    fieldName={fieldName}
                    fieldValue={fieldValue}
                    showPassword={showPassword}
                    showPasswordConfirm={showPasswordConfirm}
                    handleChange={handleChange}
                    setShowPassword={setShowPassword}
                    setShowPasswordConfirm={setShowPasswordConfirm}
                  />
                ) : (
                  <Input
                    id={`${fieldName}register`}
                    name={fieldName}
                    type={'text'}
                    placeholder={translateFieldName(fieldName)
                      .replace(/([A-Z])/g, ' $1')
                      .trim()}
                    value={fieldValue}
                    onChange={
                      fieldName === 'email' ? handleChangeEmail : handleChange
                    }
                    full={fieldValue}
                  />
                )}

                {fieldName.includes('email') &&
                  !validEmail &&
                  email.length > 0 && (
                    <p className="messageError">
                      El correo electrónico no es válido.
                    </p>
                  )}
                {fieldName.includes('password') && (
                  <PasswordRules
                    uppercaseValid={uppercaseValid}
                    numberValid={numberValid}
                    specialCharValid={specialCharValid}
                  />
                )}
                {fieldName.includes('confirmPassword') && passwordError && (
                  <p className="messageError">{passwordError}</p>
                )}
              </div>
            ))}
        </div>
        <DarkGreyButton
          onClick={nextStep}
          children="Siguiente Paso"
          width={140}
          isDisabled={
            !allFieldsFilled || !passwordValid || !!passwordError || phoneValid
          }
        />
      </div>

      <div className="content-buttons">{/* BOTONES DE GMAIL Y FACEBOOK */}</div>
    </>
  );
};

export default StepOne;
