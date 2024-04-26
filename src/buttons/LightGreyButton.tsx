import React from 'react'

import { LightGreyProps } from '../types'

import { LightGreyButtonContainer } from './styles'

const LightGreyButton = ({
  children,
  fontSize,
  fontWeight,
  padding,
  buttonClass,
  isDisabled,
  onClick,
}: LightGreyProps) => {
  return (
    <LightGreyButtonContainer
      padding={padding}
      fontSize={fontSize}
      fontWeight={fontWeight}
      className={buttonClass}
      disabled={isDisabled}
      onClick={() => onClick()}
    >
      {children}
    </LightGreyButtonContainer>
  )
}

export default LightGreyButton
