import '@fontsource/plus-jakarta-sans';
import { LightBlueProps, LightGreyProps, DarkGreyButtonProps } from '../types';
import styled, { css } from 'styled-components';

export const DarkGreyButtonContainer = styled.button<DarkGreyButtonProps>`
  display: flex;
  width: ${props => (props.width ? `${props.width}px` : 'fit-content')};
  height: 40px;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Plus Jakarta Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.12px;
  color: #fdfdfd;
  //background-color: #313131;
  background-color: ${props => (props.disabled ? '#7e858e' : '#313131')};
  border: none;
  border-radius: 10px;
  svg {
    color: #08a8d2;
    font-size: 20px;
  }
`;

export const LightBlueButtonContainer = styled.button<LightBlueProps>`
  display: flex;
  width: fit-content;
  padding: 8px 16px;
  align-items: center;
  font-family: 'Plus Jakarta Sans';
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : '16px')};
  font-style: normal;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '600')};
  line-height: ${props => (props.lineHeight ? props.lineHeight : 'normal')};
  letter-spacing: -0.32px;
  color: #0a0a18;
  background-color: #bdddeb;
  border-radius: 10px;
  cursor: pointer;
  z-index: 1;
  ${props =>
    props.height &&
    css`
      height: ${props.height}px;
    `}

  .cross {
    color: #08a8d2;
    font-weight: 600;
    font-size: 12px;
    margin-left: 5px;
  }
`;

export const LightGreyButtonContainer = styled.button<LightGreyProps>`
  display: flex;
  width: fit-content;
  padding: ${props => (props.padding ? props.padding : '8px 16px')};
  align-items: center;
  font-family: 'Plus Jakarta Sans';
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : '16px')};
  font-style: normal;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '600')};
  letter-spacing: -0.32px;
  color: #0a0a18;
  background-color: #f6f6f6;
  border-radius: 10px;
  border: none;
`;
