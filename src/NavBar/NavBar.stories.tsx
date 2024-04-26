// Navbar.stories.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoryFn, Meta } from '@storybook/react';
import NavBar from './NavBar';




export default {
  title: 'Components/Navbar',
  component: NavBar,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} as Meta;

const Template: StoryFn<{userType : string}> = (args) => <NavBar {...args} />;

export const GuestUser = Template.bind({});
GuestUser.args = {
  userType: 'guest',
};

export const AdminUser = Template.bind({});
AdminUser.args = {
  userType: 'admin',
};