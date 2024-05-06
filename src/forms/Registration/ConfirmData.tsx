import React from 'react';

import { RegistrationForm } from '../../types';

import { LetterLabelTitle, LetterLabel } from './styles';
import { calculateInputWidth } from '../utils';
import { Input } from 'inputs';
import { DarkGreyButton } from 'buttons';

export interface ConfirmDataProps {
  formData: RegistrationForm;
  //   sendData: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

const ConfirmData = ({ formData }: ConfirmDataProps) => {
  const handleSubmit = () => {
    console.log('submit');
  };
  return (
    <div className="reactanguloInterno">
      <div className="contentInputs-one">
        <div className="containerInput">
          <LetterLabel>Nombre*</LetterLabel>
          <Input
            id="nameregister"
            name="name"
            placeholder={formData.name}
            readOnly
          />
        </div>
        <div className="containerInput">
          <LetterLabel>Apellidos*</LetterLabel>

          <Input
            id="lastnameregister"
            name="lastName"
            placeholder={formData.lastname}
            readOnly
          />
        </div>
        {formData.birthDate && (
          <div className="containerInput">
            <LetterLabel>Fecha de nacimiento</LetterLabel>

            <Input
              id="datebornregister"
              name="dateOfBirth"
              placeholder={formData.birthDate}
              readOnly
            />
          </div>
        )}

        <div className="containerInput">
          <LetterLabel>Email*</LetterLabel>
          <Input
            id="emailregister"
            name="email"
            placeholder={formData.email}
            readOnly
          />
        </div>
        <div className="containerInput">
          <LetterLabel>Télefono*</LetterLabel>

          <Input
            id="phoneregister"
            name="phone"
            placeholder={formData.phone}
            readOnly
          />
        </div>
        {formData.genre && (
          <div className="containerInput">
            <LetterLabelTitle>Género</LetterLabelTitle>
            <div className="container-inpus-options">
              <Input
                id="gener-femine"
                name="genre"
                value={formData.genre}
                placeholder=""
                readOnly={true}
                inputClass={'input-selected selected'}
                width={calculateInputWidth(formData.genre)}
              />
            </div>
          </div>
        )}

        {formData.experienceType && (
          <div className="containerInput">
            <LetterLabelTitle>Tipo de Experiencia</LetterLabelTitle>

            <div className="container-inpus-options">
              <Input
                id="exp-principiante"
                name="experienceType"
                value={formData.experienceType}
                placeholder=""
                readOnly={true}
                inputClass={'input-selected selected'}
                width={calculateInputWidth(formData.experienceType)}
              />
            </div>
          </div>
        )}

        <div className="containerInput">
          <LetterLabelTitle>Tipo de actividad en Diga-ah!</LetterLabelTitle>

          <div className="container-inpus-options">
            {formData.activity && (
              <Input
                id="act-individuales"
                name="activity"
                value={formData.activity}
                placeholder=""
                readOnly={true}
                inputClass={'input-selected selected'}
                width={calculateInputWidth(formData.activity)}
              />
            )}

            {formData.actividad1 && (
              <Input
                id="act-cursos"
                name="actividad1"
                value={formData.actividad1}
                placeholder=""
                readOnly={true}
                inputClass={'input-selected selected'}
                width={calculateInputWidth(formData.actividad1)}
              />
            )}
          </div>
        </div>
      </div>
      <DarkGreyButton
        type="submit"
        onClick={handleSubmit}
        children={'Confirmar datos'}
        width={140}
      />
    </div>
  );
};

export default ConfirmData;
