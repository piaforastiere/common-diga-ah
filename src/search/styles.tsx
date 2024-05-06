import styled from 'styled-components';
import '@fontsource/plus-jakarta-sans';

export const SearchContainer = styled.div<{ width?: string }>`
  padding: 8px 0px;
  position: relative;
  display: flex;
  align-items: center;

  .search-input {
    border: 1px solid #f6f6f6;
    padding: 12px 8px;
    border-radius: 10px;
    height: 35px;
    width: ${props => (props.width ? props.width : '100%')};
  }

  input[type='date']::-webkit-inner-spin-button,
  input[type='date']::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }

  span {
    position: absolute;
    right: 10px;
    cursor: pointer;

    svg {
      font-size: 20px;
    }
  }

  &.person-search {
    input {
      background: #fff;
    }
  }
`;
