export interface Task {
  id: string;
  title: string;
  content: string;
  subtask?: string;
}

export interface WeeklyTheme {
  id: number;
  weekTitle: string;
  content: {
    id: 0;
    contentTitle: string;
    contentLink?: string;
    contentDescription?: string;
  }[];
  task?: {
    id: number;
    taskLink: string;
    taskDescription: string;
  }[];
  isVisible?: boolean;
  isActive?: boolean;
}

export interface Quotas {
  amount: number;
  quantity: number;
  date?: string;
  quoteNumber?: number;
}

export type ActivityType = {
  name: string;
};

export type Person = {
  id: number;
  name: string;
  lastname: string;
  phone: string;
  birthDate: string;
  email: string;
  genre: string;
  title?: string;
  activity: Array<string>;
  experienceType: Array<string> | string;
  image?: string;
  type?: string;
  bonos?: Array<CuponProps>;
  courses?: Array<CourseProps>;
  amountClasses?: number;
};

export interface Student extends Person {
  experienceType: string;
  classesDebt?: number;
  lastClassDate?: string;
  professors: Array<string>;
  dropboxLink?: string;
  questionnaire?: boolean;
}

export interface Profesor extends Person {
  yearsTeaching?: number;
  yearsOfExperience?: number;
  yearsSinging?: number;
  yearsOfMethodology?: number;
  biography?: string;
}

export type CuponProps = {
  id: number;
  name: string;
  amountOfClasses: number;
  price: number;
  payed: string;
  dueDate: string;
  teacher?: string;
  image?: string;
  attendance: number;
  inizializationDate: string;
};

type ListsIdsProps = {
  id: number;
};

export type CourseProps = {
  id: number;
  title: string;
  description: string;
  quotes: Quotas[];
  studentsIds: Array<ListsIdsProps>;
  material?: Array<WeeklyTheme>;
  duration: number;
  inizializationDate: string;
  //arreglar
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payments?: any;
  price: number;
  professorsIds: Array<ListsIdsProps>;
  currentWeek?: number | null;
};

export type StrudenObjProps = {
  type: string;
  objetives: Array<{ description: string }>;
};

export type ExerciseProps = {
  category: string;
  genre: string;
  rutine: string;
  excercise: string;
};

export type RepertoryProps = {
  song: string;
  observation?: string;
};

export type IndividualClassesProps = {
  classId: number;
  idStudent: number;
  idProfesor: number;
  date: string;
  priorityObj?: string;
  strudenObj?: Array<StrudenObjProps>;
  excersices?: Array<ExerciseProps>;
  repertory?: RepertoryProps;
  task?: string;
  generalObservations?: string;
};

export type EditData = {
  id: number;
  dueDate: string;
  attendance: number;
};

export type RegistrationForm = {
  name: string;
  lastname: string;
  birthDate: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  genre: string;
  experienceType: string;
  activity: string;
  actividad1: string;
  confirmData: any; //ver este dato
};
