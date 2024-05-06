import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import InlineMenu, { InlineMenuProps } from './InlineMenu';

export default {
  title: 'Components/menus/InlineMenu',
  component: InlineMenu,
} as Meta;

// Template como función para instanciar historias
const Template: StoryFn<InlineMenuProps> = (args: InlineMenuProps) => {
  // Hook useState para controlar el estado del filtro activo
  const [activeFilter, setActiveFilter] = useState(args.activeFilter);

  // Retorno del componente con el estado modificado como props
  return (
    <InlineMenu
      {...args}
      activeFilter={activeFilter}
      setActiveFilter={setActiveFilter}
    />
  );
};

// La historia por defecto para el InlineMenu
export const DefaultInlineMenu = Template.bind({});
DefaultInlineMenu.args = {
  menuItems: ['Femenino', 'Masculino', 'Otro'],
  activeFilter: 'Femenino',
};

// Ejemplo de cómo se vería con múltiples filtros activos (si tu lógica lo permite)
export const MultipleActiveFilters = Template.bind({});
MultipleActiveFilters.args = {
  ...DefaultInlineMenu.args,
  activeFilter: ['Femenino', 'Maculino'],
};

// Ejemplo de estado disabled
export const DisabledInlineMenu = Template.bind({});
DisabledInlineMenu.args = {
  ...DefaultInlineMenu.args,
  isDisabled: true,
};
