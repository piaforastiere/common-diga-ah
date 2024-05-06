import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import SectionTitle from './SectionTitle';

export default {
  title: 'Components/texts/SectionTitle',
  component: SectionTitle,
  argTypes: {
    text: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<{ text: string }> = args => <SectionTitle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Example Section Title',
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  text: 'This is a possibly longer example of a section title, demonstrating how it handles more text',
};
