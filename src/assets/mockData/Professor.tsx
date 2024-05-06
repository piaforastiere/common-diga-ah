import { Profesor } from 'types';
import annabel from '../annabel.png';

const profesor: Profesor = {
  id: 1,
  name: 'Felipe',
  lastname: 'forastiere',
  phone: '+34 666 666 666',
  birthDate: '16/01/1988',
  email: 'email@email.com',
  genre: 'Masculino',
  title: 'Vocal coach-cantante-músico',
  activity: ['tecnica', 'legit', 'lorem'],
  experienceType: [
    'Tecnica lirica y legit',
    'Ejecución',
    'Rehabilitación vocal',
  ],
  yearsTeaching: 2,
  yearsOfExperience: 2,
  yearsSinging: 3,
  yearsOfMethodology: 3,
  biography:
    'Nací en Luján, donde me crié: una pequeña ciudad en la provincia de Buenos Aires, Argentina. Hijo de un bioquímico y una psicóloga, además de músicos, por lo que siempre he tenido acceso a lenguajes diferentes que estimularon y enriquecieron mi forma de entender el mundo, y hoy, la voz. A los 10 años comencé a estudiar guitarra. Al descubrir sus reglas, comencé a investigar el piano. Y más tarde el canto. ',
  image: annabel,
  type: 'professor',
};

export const professorsList = [
  profesor,
  {
    id: 2,
    name: 'Felipe',
    lastname: 'Lorem',
    phone: '+34 666 666 666',
    birthDate: '16/01/1988',
    email: 'email@email.com',
    genre: 'Masculino',
    title: 'Vocal coach-cantante-músico',
    activity: [],
    experienceType: [
      'Tecnica lirica y legit',
      'Ejecución',
      'Rehabilitación vocal',
    ],
    yearsTeaching: 2,
    yearsOfExperience: 2,
    yearsSinging: 3,
    yearsOfMethodology: 3,
    biography:
      'Nací en Luján, donde me crié: una pequeña ciudad en la provincia de Buenos Aires, Argentina. Hijo de un bioquímico y una psicóloga, además de músicos, por lo que siempre he tenido acceso a lenguajes diferentes que estimularon y enriquecieron mi forma de entender el mundo, y hoy, la voz. A los 10 años comencé a estudiar guitarra. Al descubrir sus reglas, comencé a investigar el piano. Y más tarde el canto. ',
    image: annabel,
    type: 'professor',
  },
  {
    id: 3,
    name: 'Ipsum',
    lastname: 'Jorga',
    phone: '+34 666 666 666',
    birthDate: '16/01/1988',
    email: 'email@email.com',
    genre: 'Masculino',
    title: 'Vocal coach-cantante-músico',
    activity: [],
    experienceType: [
      'Tecnica lirica y legit',
      'Ejecución',
      'Rehabilitación vocal',
    ],
    yearsTeaching: 2,
    yearsOfExperience: 2,
    yearsSinging: 3,
    yearsOfMethodology: 3,
    biography:
      'Nací en Luján, donde me crié: una pequeña ciudad en la provincia de Buenos Aires, Argentina. Hijo de un bioquímico y una psicóloga, además de músicos, por lo que siempre he tenido acceso a lenguajes diferentes que estimularon y enriquecieron mi forma de entender el mundo, y hoy, la voz. A los 10 años comencé a estudiar guitarra. Al descubrir sus reglas, comencé a investigar el piano. Y más tarde el canto. ',
    image: annabel,
    type: 'professor',
  },
];
