import styled from 'styled-components';

import '@fontsource/plus-jakarta-sans';
import { InputPhoneProps } from '../../types';

export const ContentPhone = styled.div<InputPhoneProps>`
  width: 100%;
  display: flex;
  flex-direction: column;

  .input-react-phone {
    background: #f6f6f6;
    padding: 10px 20px;
    border-radius: 10px;
    color: #0a0a18;
    font-weight: 500;
    font-size: 14px;
    outline: #8e92bc;
    width: 100%;
    border: ${props => (props.full ? '1px solid #08A8D2' : 'none')};
    outline: none;
    height: 'auto';
    --PhoneInput-color--focus: transparent;
    --PhoneInputCountrySelectArrow-color--focus: #0a0a1878;
    --PhoneInputCountryFlag-borderColor--focus: transparent;
    option {
      background-color: #f6f6f6;
      color: #0a0a18;
      font-family: 'Plus Jakarta Sans';
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.12px;
    }

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

    input {
      background: transparent;
      border: none;
      &:focus-visible {
        outline: none;
        border: none;
      }
    }
  }
`;
