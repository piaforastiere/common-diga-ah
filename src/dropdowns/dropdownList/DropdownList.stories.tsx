import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import DropdownList from './DropdownList';
import { Person } from 'types';
import { professorsList } from '../../assets/mockData';

export default {
  title: 'Components/dropdowns/DropdownList',
  component: DropdownList,
} as Meta;

const Template: StoryFn<{
  hasSearch: boolean;
  list: Array<Person>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  text?: string;
  type: string;
  onSelect: (selectedItem: Person) => void;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = args => {
  return <DropdownList {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  hasSearch: true,
  list: professorsList,
  searchValue: '',
  setSearchValue: () => {},
  text: 'Buscar por Persona',
  type: 'add',
  onSelect: () => {},
  isVisible: true,
  setIsVisible: () => {},
};
