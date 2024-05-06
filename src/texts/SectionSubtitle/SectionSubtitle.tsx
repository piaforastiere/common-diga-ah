import React, { ReactElement } from 'react';

import { SectionSubtitles } from '../styles';

export interface SectionSubtitleProps {
  fontSize?: number;
  fontWeight?: number;
  id?: string;
  classSub?: string;
  lineHeight?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: ReactElement | string | any; //reveer esto
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any;
}

const SectionSubtitle = ({
  fontSize,
  fontWeight,
  id,
  classSub,
  lineHeight,
  children,
  onClick,
}: SectionSubtitleProps) => {
  return (
    <SectionSubtitles
      id={id}
      className={classSub}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      onClick={() => onClick()}
    >
      {children}
    </SectionSubtitles>
  );
};

export default SectionSubtitle;
