import styled from 'styled-components';

import '@fontsource/plus-jakarta-sans';
import { InputProps } from '../../types';

export const InputContainer = styled.input<InputProps>`
  background: #f6f6f6;
  padding: 10px 20px;
  border-radius: 10px;
  color: #0a0a18;
  font-weight: 500;
  font-size: 14px;
  outline: #8e92bc;
  width: ${(props: { width: string }) => (props.width ? props.width : '100%')};
  border: ${(props: { full: boolean }) =>
    props.full ? '1px solid #08A8D2' : 'none'};
  outline: none;
  height: ${(props: { height: string }) =>
    props.height ? `${props.height}px` : 'auto'};
  &::placeholder {
    color: #8e92bc;
    opacity: 1;
    font-family: 'Plus Jakarta Sans';
    font-size: 10px;
  }

  &:focus {
    outline: none;
    border: 0.5px solid #8e92bc;
  }
`;
