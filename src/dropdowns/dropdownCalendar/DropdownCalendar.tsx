import React, { useState, useEffect } from 'react';

import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs, { Dayjs } from 'dayjs';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import { DropdownCalendarContainer, CalendarContainer } from './styles';
import { DropdownCalendarProps } from 'types';
import SectionSubtitle from '../../texts/SectionSubtitle/SectionSubtitle';

const inputData = {
  type: 'date',
  minDate: dayjs().subtract(2, 'year'),
  maxDate: dayjs().add(2, 'months'),
  width: '100%',
};

const DropdownCalendar = ({
  dateSearch,
  setDateSearch,
  date,
  setDate,
}: DropdownCalendarProps) => {
  const [showCalendar, setShowCalendar] = useState(false);

  // const setDateInput = (date: Dayjs | null) => {
  //   setDateSearch(date && date.toString())
  //   setDate(dayjs(date))
  // }

  useEffect(() => {
    const _date = date && date.format('YYYY-MM-DD');
    setDateSearch(_date);
  }, [date]);

  return (
    <DropdownCalendarContainer>
      <SectionSubtitle
        fontSize={12}
        fontWeight={400}
        classSub="dropdown-title"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <>
          Buscar por fecha
          {!showCalendar ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
        </>
      </SectionSubtitle>
      {showCalendar && (
        <CalendarContainer>
          {/* <Search
						type={inputData.type}
						min={inputData.minDate}
						max={inputData.maxDate}
						width={inputData.width}
						searchValue={dateSearch}
						setSearchValue={setDateInput}
					/> */}
          <DateCalendar
            value={date}
            onChange={(date: Dayjs) => setDate(date)}
            disableFuture
            minDate={inputData.minDate}
            maxDate={inputData.maxDate}
          />
          <p onClick={() => setDate(dayjs())} className="today-button">
            HOY
          </p>
        </CalendarContainer>
      )}
    </DropdownCalendarContainer>
  );
};

export default DropdownCalendar;
