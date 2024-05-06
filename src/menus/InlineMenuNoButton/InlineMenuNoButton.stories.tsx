import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { InlineMenuNoButtonProps } from '../../types';
import InlineMenuNoButton from './InlineMenuNoButton';

//agregar el modal

export default {
  title: 'Components/menus/InlineMenuNoButton',
  component: InlineMenuNoButton,
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

const Template: StoryFn<InlineMenuNoButtonProps> = args => {
  return <InlineMenuNoButton {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  menu: ['administracion', 'alumnos', 'profesores', 'bono'],
  editing: false,
};

export const EditionMode = Template.bind({});
EditionMode.args = {
  ...Default.args,
  menu: ['administracion', 'alumnos', 'profesores', 'bono'],
  editing: true,
};
