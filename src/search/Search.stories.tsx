import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Search, { SearchProps } from './Search';

export default {
  title: 'Components/Search',
  component: Search,
} as Meta;

const Template: StoryFn<SearchProps> = args => {
  const [searchValue, setSearchValue] = useState(args.searchValue);

  return (
    <Search
      {...args}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  width: '100%',
  type: 'text',
  hasIcon: true,
  searchValue: '',
};
