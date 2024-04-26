export enum AdminMenu {
  admin = 'administración',
  student = 'alumnos',
  professors = 'profesores',
  bono = 'bono',
}

export enum AdminStudentMenu {
  bonos = 'Historial de Bonos',
  courses = 'Historial de Cursos',
  profile = 'Perfil',
}

export enum AdminProfessorMenu {
  activity = 'Historial de Actividades',
  shared = 'Procesos Compartidos',
  profile = 'Perfil',
}

export enum AdminBonusMenu {
  due = 'Bonos vencidos',
  lastClass = 'Bonos que le falten 1 clase',
  debtors = 'Deudores',
  inactiveStudents = 'Alumnos Inactivos',
}

export enum UserType {
  admin = 'Administrador',
  student = 'Alumno',
  professor = 'Profesor',
}

export enum AdminStudent {
  bonos = 'historial-de-bonos',
  courses = 'historial-de-cursos',
  profile = 'perfil',
}

export enum Experience {
  beginner = 'Principiante',
  intermediate = 'Intermedio',
  profesional = 'Profesional',
}

export const listHeads = {
  due: ['Nombre del Alumno', 'Bono activo', 'Asistencia', ' '],
  lastClass: ['Nombre del Alumno', 'Clases totales', 'Asistencia'],
  debtors: ['Nombre del Alumno', 'Debe'],
  inactiveStudents: [
    'Nombre del Alumno',
    'Bono activo',
    'Asistencia',
    'Vencimiento',
    'Ultima Clase',
  ],
}
