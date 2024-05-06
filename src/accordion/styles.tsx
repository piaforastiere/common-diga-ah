import styled from 'styled-components';
import '@fontsource/plus-jakarta-sans';

export const AccordionContainer = styled.div`
  font-family: 'Plus Jakarta Sans';
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;

  .title-section {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: baseline;
  }

  .section-task {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: baseline;
  }

  .hide {
    display: none;
  }

  .show {
    display: block;
  }
`;

export const AccordionTitles = styled.div<{ fontWeight?: number }>`
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '500')};
`;

export const AccordionInput = styled.input`
  padding: 0 0 0 24px;
  color: #0a0a18;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;

  ::placeholder {
    font-weight: 400;
    color: #8e92bc;
  }
`;

export const AddContentContainer = styled.div``;
