import { CourseProps } from 'types';

export const courses: CourseProps[] = [
  {
    id: 1,
    title: 'Desarollo de la voz',
    duration: 2,
    inizializationDate: new Date('2023-12-25').toString(),
    quotes: [
      { amount: 200, quantity: 7, quoteNumber: 1 },
      { amount: 200, quantity: 7, quoteNumber: 2 },
      { amount: 200, quantity: 7, quoteNumber: 3 },
      { amount: 200, quantity: 7, quoteNumber: 4 },
    ],
    payments: [
      { totalQuotas: 1, totalPrice: 1000 },
      { totalQuotas: 3, totalPrice: 333 },
      { totalQuotas: 7, totalPrice: 120 },
    ],
    price: 0.0,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum ipsum odit laborum tenetur ratione cupiditate laboriosam, quasi totam, expedita magni porro eos. Maiores magnam sunt eos facilis suscipit numquam explicabo.',
    studentsIds: [{ id: 1 }, { id: 3 }, { id: 4 }],
    professorsIds: [{ id: 2 }],
    material: [
      {
        id: 1,
        weekTitle: 'titulo clase',
        content: [
          {
            id: 0,
            contentTitle: 'string',
            contentLink: 'string',
            contentDescription: 'string',
          },
        ],
        isVisible: false,
        isActive: false,
      },
      {
        id: 2,
        weekTitle: 'titulo clase dos',
        content: [
          {
            id: 0,
            contentTitle: 'string',
            contentLink: 'string',
            contentDescription: 'string',
          },
        ],
        isVisible: false,
        isActive: false,
      },
      {
        id: 3,
        weekTitle: 'titulo clase tres',
        content: [
          {
            id: 0,
            contentTitle: 'string',
            contentLink: 'string',
            contentDescription: 'string',
          },
        ],
        isVisible: false,
        isActive: false,
      },
      {
        id: 4,
        weekTitle: 'titulo clase 4',
        content: [
          {
            id: 0,
            contentTitle: 'string',
            contentLink: 'string',
            contentDescription: 'string',
          },
        ],
        isVisible: false,
        isActive: false,
      },
      {
        id: 5,
        weekTitle: 'titulo clase 5',
        content: [
          {
            id: 0,
            contentTitle: 'string',
            contentLink: 'string',
            contentDescription: 'string',
          },
        ],
        isVisible: false,
        isActive: false,
      },
      {
        id: 6,
        weekTitle: 'titulo clase 6',
        content: [
          {
            id: 0,
            contentTitle: 'string',
            contentLink: 'string',
            contentDescription: 'string',
          },
        ],
        isVisible: true,
        isActive: true,
      },
      {
        id: 7,
        weekTitle: 'titulo clase 7',
        content: [
          {
            id: 0,
            contentTitle: 'string',
            contentLink: 'string',
            contentDescription: 'string',
          },
        ],
        isVisible: false,
        isActive: true,
      },
      {
        id: 8,
        weekTitle: 'titulo clase 8',
        content: [
          {
            id: 0,
            contentTitle: 'string',
            contentLink: 'string',
            contentDescription: 'string',
          },
        ],
        isVisible: false,
        isActive: true,
      },
      {
        id: 9,
        weekTitle: 'titulo clase 9',
        content: [
          {
            id: 0,
            contentTitle: 'string',
            contentLink: 'string',
            contentDescription: 'string',
          },
        ],
        isVisible: false,
        isActive: true,
      },
      {
        id: 10,
        weekTitle: 'titulo clase 10',
        content: [
          {
            id: 0,
            contentTitle: 'string',
            contentLink: 'string',
            contentDescription: 'string',
          },
        ],
        isVisible: false,
        isActive: true,
      },
      {
        id: 11,
        weekTitle: 'titulo clase 11',
        content: [
          {
            id: 0,
            contentTitle: 'string',
            contentLink: 'string',
            contentDescription: 'string',
          },
        ],
        isVisible: false,
        isActive: true,
      },
      {
        id: 12,
        weekTitle: 'titulo clase 12',
        content: [
          {
            id: 0,
            contentTitle: 'string',
            contentLink: 'string',
            contentDescription: 'string',
          },
        ],
        isVisible: false,
        isActive: true,
      },
    ],
  },
  {
    id: 2,
    title: 'Sarasa',
    duration: 8,
    inizializationDate: new Date('2024-1-25').toString(),
    quotes: [
      { amount: 200, quantity: 7, quoteNumber: 1 },
      { amount: 200, quantity: 7, quoteNumber: 2 },
      { amount: 200, quantity: 7, quoteNumber: 3 },
      { amount: 200, quantity: 7, quoteNumber: 4 },
    ],
    payments: [
      { totalQuotas: 1, totalPrice: 1000 },
      { totalQuotas: 3, totalPrice: 333 },
      { totalQuotas: 7, totalPrice: 120 },
    ],
    price: 0.0,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum ipsum odit laborum tenetur ratione cupiditate laboriosam, quasi totam, expedita magni porro eos. Maiores magnam sunt eos facilis suscipit numquam explicabo.',
    studentsIds: [{ id: 1 }, { id: 3 }, { id: 4 }],
    professorsIds: [{ id: 2 }],
    material: [
      {
        id: 1,
        weekTitle: 'titulo clase',
        content: [
          {
            id: 0,
            contentTitle: 'string',
            contentLink: 'string',
            contentDescription: 'string',
          },
        ],
        isVisible: true,
        isActive: true,
      },
      {
        id: 2,
        weekTitle: 'titulo clase dos',
        content: [
          {
            id: 0,
            contentTitle: 'string',
            contentLink: 'string',
            contentDescription: 'string',
          },
        ],
        isVisible: false,
        isActive: true,
      },
      {
        id: 3,
        weekTitle: 'titulo clase tres',
        content: [
          {
            id: 0,
            contentTitle: 'string',
            contentLink: 'string',
            contentDescription: 'string',
          },
        ],
        isVisible: false,
        isActive: true,
      },
    ],
  },
];
