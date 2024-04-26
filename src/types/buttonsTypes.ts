import { Component, ReactElement, ReactNode } from 'react'

export interface DarkGreyButtonProps {
  disabled?: boolean
  onClick: () => void
  children: ReactElement<any, string | ((props: any, deprecatedLegacyContext?: any) => ReactElement<any, any> | null) | (new (props: any, deprecatedLegacyContext?: any) => Component<any, any, any>)> | string
  width?: number
  isDisabled?: boolean
  buttonClass?: string
  type?: string
}

export interface LightBlueProps {
  children?: ReactNode
  fontSize?: number
  fontWeight?: number
  lineHeight?: number
  buttonClass?: string
  height?: number
  onClick: () => void
  isDisabled?: boolean
}

export interface LightGreyProps {
  children?: React.ReactNode
  fontSize?: number
  fontWeight?: number
  padding?: string
  buttonClass?: string
  height?: number
  isDisabled?: boolean
  onClick: () => void
}
