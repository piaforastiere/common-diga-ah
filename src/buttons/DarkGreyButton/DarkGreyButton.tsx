import React from 'react';

import { DarkGreyButtonProps } from '../../types';
import { DarkGreyButtonContainer } from '../styles';

const DarkGreyButton = ({
  onClick,
  children,
  width,
  isDisabled,
  buttonClass,
  type,
}: DarkGreyButtonProps) => {
  console.log(isDisabled, 'isDisabled');

  return (
    <DarkGreyButtonContainer
      type={type}
      disabled={isDisabled}
      width={width}
      onClick={onClick}
      className={buttonClass}
    >
      {children}
    </DarkGreyButtonContainer>
  );
};
export default DarkGreyButton;
