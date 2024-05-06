import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Dayjs } from 'dayjs';
import DropdownCalendar from './DropdownCalendar';
import { DropdownCalendarProps } from 'types';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default {
  title: 'Components/dropdowns/DropdownCalendar',
  component: DropdownCalendar,
  decorators: [
    Story => (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Story />
      </LocalizationProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<DropdownCalendarProps> = args => {
  const [dateState, setDateState] = useState<Dayjs | null>(null);
  const [dateSearchState, setDateSearchState] = useState<string | undefined>();

  return (
    <DropdownCalendar
      {...args}
      date={dateState}
      setDate={setDateState}
      dateSearch={dateSearchState}
      setDateSearch={setDateSearchState}
    />
  );
};

export const Default = Template.bind({});
