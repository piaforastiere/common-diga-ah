import styled from 'styled-components';
import '@fontsource/plus-jakarta-sans';

//LOGIN
export const FormularioInicio = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .holaSvg {
    background-image: url('/Svg/book-square.svg');
    background-size: cover;
    width: 198px;
    height: 108px;
    position: absolute;
    z-index: 1;
    top: 0;
  }
  .contentInputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75%;
  }
  input {
    color: #0a0a18;
    font-family: 'Plus Jakarta Sans';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.12px;
  }

  <<<<<<< HEAD input:focus {
    border: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #f6f6f6 inset !important;
    -webkit-text-fill-color: black !important;
  }

  input:-moz-ui-invalid {
    box-shadow: none !important;
    background-color: #f6f6f6 !important;
  }

  input:autofill {
    background-color: #f6f6f6 !important;
  }

  .containerInput {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 85%;
    margin-bottom: 10px;
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
    }
  }
  .containerInputPassword {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 90%;
    margin-bottom: 30px;
    padding-left: 10px;
    .svg-eye {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 113%;
      margin-bottom: 10px;
    }
  }
  .containerInput {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 85%;
    margin-bottom: 10px;
    gap: 8px;
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
    }
  }
  .containerInputPassword {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 90%;
    margin-bottom: 30px;
    padding-left: 10px;
    .svg-eye {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 113%;
      margin-bottom: 10px;
    }
  }

  svg {
    margin-left: 5px;
    cursor: pointer;
  }

  .link-forgot-password {
    font-family: 'Plus Jakarta Sans';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.12px;
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 10px;
  }
  .container-checkbox {
    display: flex;
    label {
      color: #0a0a18;
      font-family: 'Plus Jakarta Sans';
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.24px;
    }
    .checkbox-input {
      width: 25px;
      border-radius: 50%;
    }
  }

  .other-option {
    font-family: 'Plus Jakarta Sans';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.12px;
    cursor: pointer;
    margin-top: 10px;
    text-decoration: underline;
  }

  .button-gmail {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 10px;
    color: #0a0a18;
    text-align: center;
    font-family: 'Plus Jakarta Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.32px;
    margin-bottom: 10px;
  }

  .button-facebook {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1877f2;
    border-radius: 10px;
    padding: 10px;
    color: #f8f8f8;
    text-align: center;
    font-family: 'Plus Jakarta Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.32px;
  }

  .content-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .svg-google {
    background-image: url('/Svg/google-icon-logo.svg');
    background-size: cover;
    width: 26px;
    height: 23px;
    margin-right: 10px;
  }

  .messageError {
    display: flex;
    color: #ec8f87;
    font-family: 'Plus Jakarta Sans';
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.12px;
    margin-top: 5px;
    margin-left: 5px;
  }
  .svg-facebook {
    background-image: url('/Svg/facebook-icon.svg');
    background-size: cover;
    width: 26px;
    height: 23px;
    margin-right: 10px;
  }
`;

//Formulario Rectangulo
export const FormularioRectangulo = styled.div`
  background-color: #fdfdfd;
  max-width: 700px;
  width: 47%;
  height: 75%;
  flex-shrink: 0;
  border-radius: 10px;
  box-shadow: 4px 4px 24px 0px rgba(49, 49, 49, 0.15);
  position: absolute;
  top: 23%;
  z-index: 1;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  .reactanguloInterno {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 65%;
    width: 350px;
    padding: 20px 0px;
    border-radius: 10px;
    border: 0.5px solid var(--Gris1, #dbdbdb);
    box-shadow: 0px 4px 8px 0px rgba(142, 146, 188, 0.05);
  }

  .messageError {
    display: flex;
    color: #ec8f87;
    font-family: 'Plus Jakarta Sans';
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.12px;
    margin-top: 5px;
    margin-left: 5px;
  }
`;
//Formulario Register
export const FormularioRectanguloRegister = styled.form<{
  step?: number;
}>`
  background-color: #fdfdfd;
  max-width: 724px;
  width: 47%;
  height: auto;
  padding: 30px 0px;
  flex-shrink: 0;
  border-radius: 10px;
  box-shadow: 4px 4px 24px 0px rgba(49, 49, 49, 0.15);
  position: absolute;
  top: 30%;
  z-index: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  .reactanguloInterno {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 350px;
    padding: 20px 0px;
    border-radius: 10px;
    border: 0.5px solid var(--Gris1, #dbdbdb);
    box-shadow: 0px 4px 8px 0px rgba(142, 146, 188, 0.05);
  }
  .custom-datepicker-popper {
    z-index: 10 !important; /* Asegura que el DatePicker se muestre encima de otros elementos */
  }
  .titleRegister {
    font-family: 'Plus Jakarta Sans';
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 36px */
    letter-spacing: -0.48px;
    margin: 10px 0px;
  }

  input:focus {
    border: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #f6f6f6 inset !important;
    -webkit-text-fill-color: black !important;
  }

  input:-moz-ui-invalid {
    box-shadow: none !important;
    background-color: #f6f6f6 !important;
  }

  input:autofill {
    background-color: #f6f6f6 !important;
  }
`;

//Contenedor de "volver"
export const ContentBack = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: flex-start;
  width: 90%;
  cursor: pointer;

  .arrow-right-back {
    background-image: url('/Svg/arrow-right-back.svg');
    background-size: cover;
    width: 23px;
    height: 22px;
    margin-right: 6px;
  }
  p {
    color: #8e92bc;
    font-family: 'Plus Jakarta Sans';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    letter-spacing: -0.28px;
  }
`;
//Letra Titulo formulario
export const Letter = styled.p`
  font-family: 'Plus Jakarta Sans';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.12px;
  margin-bottom: 20px;
`;

//Letra Titulo formulario
export const LetterUppcarse = styled.p`
  color: var(--Gris-5, #313131);
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.32px;
  margin-bottom: 20px;
`;
export const LetterLabelTitle = styled.p`
  color: #0a0a18;
  font-family: 'Plus Jakarta Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: -0.28px;
  margin-bottom: 10px;
  margin-top: 22px;
`;
//Letra Label
export const LetterLabel = styled.label`
  font-family: 'Plus Jakarta Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.12px;
  margin-bottom: 5px;
  text-align: left;
`;

//Recover Password
export const FormularioRecoverPassword = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .copiaDIGA-AH {
    background-image: url('/Svg/Copia de DIGA-AH 1.svg');
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
  }

  .holaSvg {
    background-image: url('/Svg/book-square.svg');
    background-size: cover;
    width: 198px;
    height: 108px;
    position: absolute;
    z-index: 1;
    top: 0;
  }
  .letter {
    font-family: 'Plus Jakarta Sans';
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.12px;
    margin-bottom: 20px;
  }
  .letterLabel {
    font-family: 'Plus Jakarta Sans';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.12px;
    margin-bottom: 5px;
    text-align: left;
  }
  .contentInputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 89%;
    margin-bottom: 40%;
    > div:first-child {
      display: flex;
      width: 100%;
      margin-bottom: 7px;
    }
  }

  .arrow-right {
    background-image: url('/Svg/arrow-right.svg');
    background-size: cover;
    width: 22px;
    height: 18px;
    margin-right: 30px;
  }

  .containerInputPassword {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    label {
      margin-bottom: 15px;
    }
    input {
      font-family: 'Plus Jakarta Sans';
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.12px;
    }
  }
  input:focus {
    border: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #f6f6f6 inset !important;
    -webkit-text-fill-color: black !important;
  }

  input:-moz-ui-invalid {
    box-shadow: none !important;
    background-color: #f6f6f6 !important;
  }

  input:autofill {
    background-color: #f6f6f6 !important;
  }
`;

export const TitleForm = styled.p`
  color: var(--Oscuro, #0a0a18);
  text-shadow: 4px 4px 24px rgba(49, 49, 49, 0.15);
  font-family: 'Plus Jakarta Sans';
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 60px */
  letter-spacing: -1.2px;
  position: absolute;
  z-index: 1;
  top: 93px;
`;

export const FormularioVerifying = styled.div`
  position: relative;
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .letter {
    font-family: 'Plus Jakarta Sans';
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.12px;
    margin-bottom: 5px;
  }
  .contentInputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 89%;
    margin-bottom: 20%;
    > div:first-child {
      display: flex;
      width: 100%;
      margin-bottom: 7px;
    }
  }
`;

export const ScrollBar = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px; // Ancho de la barra de desplazamiento
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1; // Color de fondo del riel de la barra de desplazamiento
  }

  &::-webkit-scrollbar-thumb {
    background: #888; // Color de la barra de desplazamiento
    border-radius: 10px; // Redondeo de la barra de desplazamiento
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #f1f1f1; // Color de la barra de desplazamiento al pasar el mouse
  }

  .holaSvg {
    background-image: url('/Svg/book-square.svg');
    background-size: cover;
    width: 198px;
    height: 108px;
    position: absolute;
    z-index: 1;
    top: 0;
  }
  .letter {
    font-family: 'Plus Jakarta Sans';
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.12px;
    margin-bottom: 20px;
  }
  .contentInputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 25%;
    padding: 0px 30px;
  }
  .contentInputs-one {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10%;
    width: 70%;
  }

  .containerInput {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 10px;
    width: 100%;
    .messageError {
      display: flex;
      color: #ec8f87;
      font-family: 'Plus Jakarta Sans';
      font-size: 11px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.12px;
      margin-top: 5px;
      margin-left: 5px;
    }
    input {
      color: #0a0a18;
      font-family: 'Plus Jakarta Sans';
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.12px;
    }
    .content-password {
      display: flex;
      align-items: center;
      width: 113%;
      svg {
        margin-left: 10px;
        cursor: pointer;
        width: 22px;
      }
    }
  }
  .contentDescriptionPassword {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .descriptionPassword {
      color: var(--Gris-5, #313131);
      font-family: 'Plus Jakarta Sans';
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.12px;
    }
    .content-rules {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-left: 5px;
      .rules {
        color: var(--celeste-21, #08a8d2);
        font-family: 'Plus Jakarta Sans';
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.12px;
      }
    }
  }
  .valid {
    display: none !important;
  }
  .container-inpus-options {
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    gap: 8px;
    flex-wrap: wrap;
    .input-selected {
      border-radius: 10px;
      background: #f6f6f6;
      cursor: pointer;
      transition: background-color 0.3s;
      color: var(--Oscuro, #0a0a18);
      font-family: 'Plus Jakarta Sans';
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.12px;
    }

    .selected {
      border: 0.5px solid #08a8d2;
      background: #bdddeb;
    }
    .selected-show {
      min-width: 0;
      width: auto;
      overflow: hidden;
    }
  }

  .letter-answer {
    color: var(--Gris-5, #313131);
    text-align: justify;
    font-family: 'Plus Jakarta Sans';
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.12px;
    width: 225px;
    margin-bottom: 10px;
  }

  .other-option {
    font-family: 'Plus Jakarta Sans';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.12px;
    cursor: pointer;
    margin-top: 10px;
    text-decoration: underline;
  }

  .button-gmail {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 10px;
    color: #0a0a18;
    text-align: center;
    font-family: 'Plus Jakarta Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.32px;
    margin-bottom: 10px;
  }

  .button-facebook {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1877f2;
    border-radius: 10px;
    padding: 10px;
    color: #f8f8f8;
    text-align: center;
    font-family: 'Plus Jakarta Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.32px;
  }

  .content-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 17px;
  }
  .svg-google {
    background-image: url('/Svg/google-icon-logo.svg');
    background-size: cover;
    width: 26px;
    height: 23px;
    margin-right: 10px;
  }

  .svg-facebook {
    background-image: url('/Svg/facebook-icon.svg');
    background-size: cover;
    width: 26px;
    height: 23px;
    margin-right: 10px;
  }
`;
export const FormularioRegister = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .copiaDIGA-AH {
    background-image: url('/Svg/Copia de DIGA-AH 1.svg');
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
  }
`;

export const StepProgress = styled.div<{
  completionPercentages: { [key: number]: number };
  currentStep: number;
}>`
  width: 100%;
  margin: 30px 0px;

  .stepper-wrapper {
    width: 100%;
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .stepper-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    font-family: 'Plus Jakarta Sans';
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.24px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  .stepper-item::before {
    position: absolute;
    content: '';
    border-bottom: 2px solid #ccc;
    width: 100%;
    top: 12px;
    left: -50%;
    z-index: 2;
  }

  ${props =>
    Object.keys(props.completionPercentages)
      .map(key => {
        const step = Number(key); // Convierte la clave a número
        const isCompleted = step < props.currentStep;
        const isCurrent = step === props.currentStep;
        const width = isCompleted
          ? 100
          : isCurrent
            ? props.completionPercentages[step]
            : 0;

        return `
        .stepper-item:nth-child(${step})::after {
          content: "";
          position: absolute;
          border-bottom: 2px solid ${
            isCompleted || isCurrent ? '#08a8d2' : '#ccc'
          };
          width: ${width}%;
          top: 12px;
          left: 50%; // Asegúrate de que comienza desde el lado izquierdo
          z-index: 3;
        }
        `;
      })
      .join('')}

  .stepper-item .step-counter {
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #f6f6f6;
    margin-bottom: 6px;
    color: #8e92bc;
    border: solid 1px #08a8d2;
  }

  .stepper-item.active {
    font-weight: bold;
  }

  .stepper-item.completed .step-counter {
    background-color: #08a8d2;
    color: #f4f4f4;
  }

  .stepper-item:first-child::before {
    content: none;
  }
  .stepper-item:last-child::after {
    content: none;
  }
`;

export const ProgressIndicator = styled.div<{ widthPercentage: number }>`
position: relative;
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  .stepper-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  .stepper-item::before {
    position: absolute;
    content: "";
    border-bottom: 2px solid #ccc;
    width: 100%;
    top: 12px;
    left: -50%;
    z-index: 2;
  }

  .stepper-item::after {
    position: absolute;
    content: "";
    border-bottom: 2px solid #ccc;
    width: 100%;
    top: 12px;
    left: 50%;
    z-index: 2;
  }

  .stepper-item .step-counter {
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #f6f6f6;
    margin-bottom: 6px;
    color: #8e92bc;
    border: solid 1px #08a8d2;
  }

  .stepper-item.active {
    font-weight: bold;
  }

  .stepper-item.completed .step-counter {
    background-color: #08a8d2;
    color: #f4f4f4;
  }

  .stepper-item:first-child::before {
    content: none;
  }
  .stepper-item:last-child::after {
    content: none;
  }
  .stepper-item.completed::before {
    position: absolute;
    content: "";
    border-bottom: 2px solid #ccc;
    width:100%
    top: 12px;
    left: 50%;
    z-index: 3;
  }
  .stepper-item.completed::after {
    position: absolute;
    content: "";
    border-bottom: 2px solid #08a8d2;
    width: ${(props: { widthPercentage: string }) => (props.widthPercentage ? props.widthPercentage : '0')}%;
    top: 12px;
    left: 50%;
    z-index: 3;
  }
`;
