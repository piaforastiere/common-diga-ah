import { RegistrationForm, StepFields } from '../types';

export const stepFields: StepFields = {
  1: [
    'name',
    'lastname',
    'birthDate',
    'email',
    'phone',
    'password',
    'confirmPassword',
  ],
  2: ['genre', 'experienceType', 'activity', 'actividad1'],
  3: ['confirmData'],
};

export const calculateCompletionPercentage = (
  step: keyof StepFields,
  formData: RegistrationForm
) => {
  const fields = stepFields[step];

  let adjustedFields = fields;
  const totalFields = fields.length;
  if (
    step === 2 &&
    ((formData['actividad1'] && !formData['activity']) ||
      (!formData['actividad1'] && formData['activity']))
  ) {
    adjustedFields.push('activity');
    adjustedFields.push('actividad1');
  } else if (step === 2 && formData['actividad1'] && !formData['activity']) {
    adjustedFields = adjustedFields.filter(
      (field: string) => field !== 'activity'
    );
  }

  const filledFields = adjustedFields.filter(
    (field: string | number | symbol) =>
      formData[field as keyof typeof formData]
  ).length;

  const completionPercentage = (filledFields / totalFields) * 100;
  return completionPercentage;
};

export const stepColor = (number: number, stepNumber: number) => {
  return number <= stepNumber ? 'stepper-item completed' : 'stepper-item';
};

export const translateFieldName = (fieldName: string): string => {
  const fieldTranslations: { [key: string]: string } = {
    name: 'Nombre',
    lastname: 'Apellidos',
    birthDate: 'Fecha de Nacimiento',
    email: 'Email',
    phone: 'Teléfono',
    password: 'Contraseña',
    confirmPassword: 'Confirmar Contraseña',
    genre: 'Género',
    experienceType: 'Experiencia',
    activity: 'Actividades',
  };

  return fieldTranslations[fieldName] || fieldName;
};

export const calculateInputWidth = (texto: string) => {
  return texto === 'Clases Individuales'
    ? '150px'
    : texto === 'Otro'
      ? '70px'
      : texto === ('Femenino' || 'Masculino')
        ? '100px'
        : texto === 'Cursos'
          ? '85px'
          : '110px';
};
