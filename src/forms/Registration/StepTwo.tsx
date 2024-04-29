import React, { ChangeEvent } from 'react';

import { RegistrationForm } from '../../types';

// import { LetterLabelTitle, LetterUppcarse } from './styles';

interface StepTwoProps {
  setStepNumber: (step: number) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  formData: RegistrationForm;
}

const StepTwo = ({ setStepNumber, handleChange, formData }: StepTwoProps) => {
  // const [selectedGender, setSelectedGender] = useState(formData.genre);
  // const [selectedExperiencie, setSelectedExperiencie] = useState(
  //   formData.experienceType
  // );
  // const [selectedActivities, setSelectedActivities] = useState<string>(
  //   formData.activity
  // );
  // const [selectedActivities1, setSelectedActivities1] = useState<string>(
  //   formData.actividad1
  // );

  // const handleClickInput = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;

  //   if (name === 'genre') {
  //     setSelectedGender(value);
  //     handleChange(e);
  //   } else if (name === 'experienceType') {
  //     setSelectedExperiencie(value);
  //     handleChange(e);
  //   } else if (name === 'activity') {
  //     setSelectedActivities(selectedActivities ? '' : value);
  //     handleChange({
  //       target: { name: name, value: selectedActivities ? '' : value },
  //     });
  //   } else {
  //     setSelectedActivities1(selectedActivities1 ? '' : value);
  //     handleChange({
  //       target: { name: name, value: selectedActivities1 ? '' : value },
  //     });
  //   }
  // };
  // const nextStep = () => {
  //   setStepNumber(3);
  // };
  return (
    <div className="reactanguloInterno">
      {/* <LetterUppcarse>Personaliza tu perfil</LetterUppcarse>
      <div>
        <div className="contentInputs">
          <div className="containerInput">
            <LetterLabelTitle>Género</LetterLabelTitle>
            <div className="container-inpus-options">
              <Input
                id="gener-femine"
                name="genre"
                value="Femenino"
                placeholder=""
                readOnly={true}
                inputClass={
                  selectedGender === 'Femenino'
                    ? 'input-selected selected'
                    : 'input-selected'
                }
                onClick={e => handleClickInput(e)}
                width="98px"
              />
              <Input
                id="gener-masculino"
                name="genre"
                value="Masculino"
                placeholder=""
                readOnly={true}
                inputClass={
                  selectedGender === 'Masculino'
                    ? 'input-selected selected'
                    : 'input-selected'
                }
                onClick={e => handleClickInput(e)}
                width="98px"
              />
              <Input
                id="gener-other"
                name="genre"
                value="Otro"
                placeholder=""
                readOnly={true}
                inputClass={
                  selectedGender === 'Otro'
                    ? 'input-selected selected'
                    : 'input-selected'
                }
                onClick={e => handleClickInput(e)}
                width="70px"
              />
            </div>
          </div>
          <div className="containerInput">
            <LetterLabelTitle>Tipo de Experiencia</LetterLabelTitle>
            <p className="letter-answer">
              ¿Que tipo de experiencia crees que tienes?
            </p>
            <div className="container-inpus-options">
              <Input
                id="exp-principiante"
                name="experienceType"
                value="Principiante"
                placeholder=""
                readOnly={true}
                inputClass={
                  selectedExperiencie === 'Principiante'
                    ? 'input-selected selected'
                    : 'input-selected'
                }
                onClick={e => handleClickInput(e)}
                width="110px"
              />
              <Input
                id="ex-intermedio"
                name="experienceType"
                value="Intermedio"
                placeholder=""
                readOnly={true}
                inputClass={
                  selectedExperiencie === 'Intermedio'
                    ? 'input-selected selected'
                    : 'input-selected'
                }
                onClick={e => handleClickInput(e)}
                width="103px"
              />
              <Input
                id="ex-profesional"
                name="experienceType"
                value="Profesional"
                placeholder=""
                readOnly={true}
                inputClass={
                  selectedExperiencie === 'Profesional'
                    ? 'input-selected selected'
                    : 'input-selected'
                }
                onClick={e => handleClickInput(e)}
                width="105px"
              />
            </div>
          </div>
          <div className="containerInput">
            <LetterLabelTitle>Tipo de actividad en Diga-ah!</LetterLabelTitle>
            <p className="letter-answer">
              ¿Que actividad te interesa realizar en la academia?
            </p>
            <div className="container-inpus-options">
              <Input
                id="act-individuales"
                name="activity"
                value="Clases Individuales"
                placeholder=""
                readOnly={true}
                inputClass={
                  selectedActivities.includes('Clases Individuales')
                    ? 'input-selected selected'
                    : 'input-selected'
                }
                onClick={e => handleClickInput(e)}
                width="146px"
              />
              <Input
                id="act-cursos"
                name="actividad1"
                value="Cursos"
                placeholder=""
                readOnly={true}
                inputClass={
                  selectedActivities1.includes('Cursos')
                    ? 'input-selected selected'
                    : 'input-selected'
                }
                onClick={e => handleClickInput(e)}
                width="80px"
              />
            </div>
          </div>
        </div>
      </div>
      <DarkGreyButton
        onClick={() => nextStep()}
        children={'Siguiente paso'}
        width={150}
      />
      <p className="other-option" onClick={() => nextStep()}>
        Omitir
      </p> */}
    </div>
  );
};

export default StepTwo;
