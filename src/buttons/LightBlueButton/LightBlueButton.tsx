import React from 'react';

import { LightBlueProps } from '../../types';

import { LightBlueButtonContainer } from '../styles';

const LightBlueButton = ({
  children,
  fontSize,
  fontWeight,
  lineHeight,
  buttonClass,
  height,
  onClick,
  isDisabled,
}: LightBlueProps) => {
  return (
    <LightBlueButtonContainer
      lineHeight={lineHeight}
      fontSize={fontSize}
      fontWeight={fontWeight}
      className={buttonClass}
      height={height}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </LightBlueButtonContainer>
  );
};

export default LightBlueButton;
