import { CuponProps } from 'types';

export const cupons: CuponProps[] = [
  {
    id: 1,
    name: 'Anna Lorem',
    amountOfClasses: 4,
    price: 200,
    payed: 'si',
    dueDate: new Date('2024-10-25').toString(),
    teacher: 'Felipe Forastiere',
    image: '',
    attendance: 2,
    inizializationDate: new Date('2023-09-25').toString(),
  },
  {
    id: 2,
    name: 'Anas Menas',
    amountOfClasses: 4,
    price: 200,
    payed: 'si',
    dueDate: new Date('2024-09-25').toString(),
    teacher: 'Felipe Forastiere',
    image: '',
    attendance: 4,
    inizializationDate: new Date('2023-08-25').toString(),
  },
  {
    id: 3,
    name: 'Ipsum Lorem',
    amountOfClasses: 4,
    price: 200,
    payed: 'si',
    dueDate: new Date('2023-03-25').toString(),
    teacher: 'Felipe Forastiere',
    image: '',
    attendance: 4,
    inizializationDate: new Date('2023-02-25').toString(),
  },
  {
    id: 4,
    name: 'Lele Lorem',
    amountOfClasses: 4,
    price: 200,
    payed: 'si',
    dueDate: new Date('2024-03-25').toString(),
    teacher: 'Felipe Forastiere',
    image: '',
    attendance: 3,
    inizializationDate: new Date('2023-02-25').toString(),
  },
];
