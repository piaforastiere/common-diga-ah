// InlineMenuHeader.stories.tsx
import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import InlineMenuHeader from './InlineMenuHeader';
import { InlineMenuHeaderProps } from '../../types';

//agregar el modal

export default {
  title: 'Components/menus/InlineMenuHeader',
  component: InlineMenuHeader,
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/administration/user']}>
        <Routes>
          <Route path="/administration/:user" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: StoryFn<InlineMenuHeaderProps> = args => {
  const [modalStatus, setModalStatus] = useState(false);
  return (
    <InlineMenuHeader
      {...args}
      modalStatus={modalStatus}
      setModalStatus={setModalStatus}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  menu: ['administracion', 'alumnos', 'profesores', 'bono'],
  editionMode: false,
};

export const EditionMode = Template.bind({});
EditionMode.args = {
  ...Default.args,
  menu: ['administracion', 'alumnos', 'profesores', 'bono'],
  editionMode: true,
};

export const WithModalOpen = Template.bind({});
WithModalOpen.args = {
  ...Default.args,
  menu: ['administracion', 'alumnos', 'profesores', 'bono'],
  modalStatus: true,
};
