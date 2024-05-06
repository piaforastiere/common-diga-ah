import styled from 'styled-components';
import '@fontsource/plus-jakarta-sans';

export const DropdownCalendarContainer = styled.div`
  padding: 8px 16px;
  border-radius: 18px;
  background-color: #f6f6f6;
  position: relative;
  width: 100%;
  max-width: 230px;
  cursor: pointer;
  position: relative;
  padding: 8px 0;
  font-family: 'Plus Jakarta Sans';

  .dropdown-title {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const CalendarContainer = styled.div`
  position: absolute;
  width: fit-content;
  max-width: 320px;
  padding: 0 6px;
  top: 50px;
  left: 0;
  background-color: #f6f6f6;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  .MuiDateCalendar-root {
    width: 280px;
    max-height: 280px;
  }
  .MuiYearCalendar-root {
    width: 280px;
    max-height: 280px;
  }

  .today-button {
    font-family: 'Plus Jakarta Sans';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.14px;
    text-transform: uppercase;
    color: #08a8d2;
    text-align: right;
    padding: 14px 16px;
  }
`;
