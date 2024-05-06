import styled from 'styled-components';
import '@fontsource/plus-jakarta-sans';

export const DropdownListContainer = styled.div`
  display: flex;
  padding: 8px 12px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 18px;
  background-color: #f6f6f6;
  position: relative;
  width: 100%;
  max-width: 160px;
  cursor: pointer;
  font-family: 'Plus Jakarta Sans';

  .dropdown-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

export const ListContainer = styled.div`
  max-height: calc(100vh - 200px);
  width: 100%;
  overflow-y: scroll;
  background-color: #f6f6f6;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  text-align: left;
  padding-bottom: 5px;

  .person-search {
    width: 100%;
    height: 40px;
    padding: 0;

    input {
      max-height: 25px;
      width: 93%;
      padding: 4px;
    }
  }

  p {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.12px;
    color: #8e92bc;
    padding-top: 5px;
    font-family: 'Plus Jakarta Sans';
  }
`;
