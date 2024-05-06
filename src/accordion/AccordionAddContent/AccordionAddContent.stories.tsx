// AccordionAddContent.stories.tsx
import React, { Dispatch, SetStateAction, useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import AccordionAddContent from './AccordionAddContent';
import { WeeklyTheme } from '../../types';
import { Input } from '../../inputs';
import { SectionSubtitle } from '../../texts';

export default {
  title: 'Components/accordion/AccordionAddContent',
  component: AccordionAddContent,
  // If there are any decorators or arguments to pass in for every story uniformly, they can be included here
} as Meta;

const Template: StoryFn<{
  taskList: any[];
  addTaks: Dispatch<SetStateAction<WeeklyTheme[]>>;
  week?: number;
}> = args => {
  const [taskList, setTaskList] = useState<WeeklyTheme[]>(args.taskList);

  return (
    <AccordionAddContent
      taskList={taskList}
      addTaks={setTaskList}
      week={args.week}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  taskList: [],
  week: 1,
};

export const WithExistingTasks = Template.bind({});
WithExistingTasks.args = {
  taskList: [
    {
      id: 1,
      title: 'Existing Task 1',
      content: 'This is the content for task 1',
      description: 'Description for task 1',
    },
    {
      id: 2,
      title: 'Existing Task 2',
      content: 'This is the content for task 2',
      description: 'Description for task 2',
    },
  ],
  week: 1,
};

// Below we're reexporting other components so they will show up in Storybook under the same group.
export { Input, SectionSubtitle };
