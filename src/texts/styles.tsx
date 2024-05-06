import styled from 'styled-components';

import '@fontsource/plus-jakarta-sans';
import { SubtitleProps } from '../types';

export const SectionTitles = styled.p`
  font-family: 'Plus Jakarta Sans';
  text-align: left;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
`;

export const SectionSubtitles = styled.p<SubtitleProps>`
  font-family: 'Plus Jakarta Sans';
  text-align: left;
  font-weight: ${props => (props.fontWeight ? `${props.fontWeight}` : '600')};
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : '14px')};
  line-height: ${props =>
    props.lineHeight ? `${props.lineHeight}px` : '21px'};

  &.inactive {
    color: #8e92bc;
  }

  svg {
    color: #08a8d2;
    font-size: 20px;
    padding-right: 5px;
  }
`;
