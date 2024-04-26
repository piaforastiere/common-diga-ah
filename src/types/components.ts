import { Dispatch, SetStateAction, ReactElement, ChangeEvent } from 'react'

import { Dayjs } from 'dayjs'

import {
  CuponProps,
  Person,
  IndividualClassesProps,
  CourseProps,
  WeeklyTheme,
  RegistrationForm,
} from './types'

export type LayoutProps = {
  children?: ReactElement
  userType: string | null
}

// MENUS
export interface HeaderProps {
  title: string
  profileImage?: string
  editionMode: boolean
  modalStatus: boolean
  setModalStatus: Dispatch<SetStateAction<boolean>>
}

export interface InlineMenuHeaderProps {
  userType: string
  editionMode: boolean
  modalStatus: boolean
  setModalStatus: Dispatch<SetStateAction<boolean>>
}

export interface InlineMenuNoButtonProps {
  userType: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  menu: any
  editing?: boolean
}

// TEXT
export type SubtitleProps = {
  fontSize?: number
  fontWeight?: number
  lineHeight?: number
}

// DROPDOWNS
export interface DropdownCalendarProps {
  dateSearch: string | null
  setDateSearch: Dispatch<SetStateAction<string | null>>
  date: Dayjs | null
  setDate: Dispatch<SetStateAction<Dayjs | null>>
}

//DETAILS
export type DetailsProps = {
  image: string
}

//CAROUSEL
export interface CarrouselProps {
  title: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any
  type: string
  showCourseForm: boolean
  setShowCourseForm: Dispatch<SetStateAction<boolean>>
  showCoursesDetails: boolean
  displayCoursesEdition: () => void
}

//CARDS
export type CardCoachProps = {
  image?: string
  title: string
  subtitle: string
}

export type CardRoutineProps = {
  image?: string
  title: string
  subtitle?: string
  showCoursesDetails: boolean
}

export type CardCousesProps = {
  showCoursesDetails?: boolean
}

// INPUTS
export interface InputProps {
  height?: number
  width?: string
  type?: string
  min?: string | number | Dayjs | undefined
  max?: string | number | Dayjs | undefined
  name: string
  id: string
  placeholder?: string | number
  value?: string | number | null
  defaultValue?: string | number
  inputClass?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onClick?: (e: MouseEvent) => void
  onBlur?: (e: FocusEvent) => void
  onFocus?: (e: FocusEvent) => void
  readOnly?: true
  full?: boolean | string
  disabled?: boolean
}

//Input phone
export interface InputPhoneProps {
  height?: number
  width?: string
  type?: string
  name?: string
  id?: string
  placeholder?: string | number
  value?: string | number | null
  defaultValue?: string | number
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  readOnly?: true
  setPhoneValid?: Dispatch<SetStateAction<boolean>>
  full?: boolean | string
}

//MODALS
export interface BonoModalProps {
  modalStatus: boolean
  setModalStatus: Dispatch<SetStateAction<boolean>>
  couponId?: number
  info?: CuponProps | null | undefined
  editionMode: boolean
}

export interface WeekDescription {
  isFocused: boolean
}

//FORMS
export interface StepFields {
  [step: string]: Array<keyof RegistrationForm>
}

export interface MainInputProps {
  weeksData: WeeklyTheme[]
  weekInformation: WeeklyTheme
  weekNumber: number
  hideWeek: (id: number) => void
  deleteWeek: (id: number) => void
  showContent: boolean
  setWeekInformation: (value: SetStateAction<WeeklyTheme>) => void
  setShowContent: Dispatch<SetStateAction<boolean>>
}

export interface FormProps {
  height?: number
}

export interface DragAndDropProps {
  children?: ReactElement
  backgroundColor?: boolean
}

export interface PeopleSectionProps {
  title: string
  professorsList: Person[]
  peopleList: Person[]
  setList: Dispatch<React.SetStateAction<Person[]>>
}

export interface QuotesProps {
  quoteNumber: number
  quotePrice: number
}

export interface ValueSectionProps {
  formQuotas: {
    totalValue: number
    amountQuotas: number
    quotasValue: QuotesProps[]
  }
  handleQuotas: (event: ChangeEvent) => void
  setFormQuotas: (
    value: SetStateAction<{
      totalValue: number
      amountQuotas: number
      quotasValue: QuotesProps[]
    }>,
  ) => void
}

export interface DescriptionSectionProps {
  handleChange: (event: ChangeEvent) => void
}

//PROFESORS LISTS
export type ProfesorIndividualClassesProps = {
  content: IndividualClassesProps[]
  activeItem: string | number | null
  setActiveItem: Dispatch<SetStateAction<string | number | null>>
  editClass: (classId: number, type: string, date: string) => void
  deleteClass: (classId: number, type: string) => void
  editing: {
    id: number | null
    type: string | null
    editing: boolean
  }
  setEditing: Dispatch<
    SetStateAction<{ id: number | null; type: string | null; editing: boolean }>
  >
  studentSearch: string
  setStudentSearch: Dispatch<SetStateAction<string>>
  setEditionMode: Dispatch<SetStateAction<boolean>>
}

export type ProfessorCoursesProps = {
  content: Array<CourseProps>
  activeItem: string | number | null
  setActiveItem: Dispatch<SetStateAction<string | number | null>>
  editCourse: (id: number, type: string, date: string) => void
  deleteCourse: (id: number, type: string) => void
  editing: {
    id: number | null
    type: string | null
    editing: boolean
  }
  setEditing: Dispatch<
    SetStateAction<{ id: number | null; type: string | null; editing: boolean }>
  >
  setEditionMode: Dispatch<SetStateAction<boolean>>
}

//STUDENTS LISTS
