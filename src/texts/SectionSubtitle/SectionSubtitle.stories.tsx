// SectionSubtitle.stories.tsx
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import SectionSubtitle, { SectionSubtitleProps } from './SectionSubtitle';

export default {
  title: 'Components/texts/SectionSubtitle',
  component: SectionSubtitle,
} as Meta;

const Template: StoryFn<SectionSubtitleProps> = args => (
  <SectionSubtitle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  fontSize: 16,
  fontWeight: 400,
  id: 'section-subtitle-id',
  classSub: 'section-subtitle-class',
  lineHeight: 1.5,
  children: 'Section Subtitle Text',
  onClick: () => alert('Subtitle clicked'),
};

export const WithCustomFontSize = Template.bind({});
WithCustomFontSize.args = {
  ...Default.args,
  fontSize: 20,
};

export const WithCustomFontWeight = Template.bind({});
WithCustomFontWeight.args = {
  ...Default.args,
  fontWeight: 600,
};

export const WithCustomLineHeight = Template.bind({});
WithCustomLineHeight.args = {
  ...Default.args,
  lineHeight: 2,
};
