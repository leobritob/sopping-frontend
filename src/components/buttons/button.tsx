import styled from 'styled-components'
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  shadow,
  ShadowProps,
  padding,
  PaddingProps,
  space,
  SpaceProps,
} from 'styled-system'

type ButtonProps = ColorProps & LayoutProps & ShadowProps & PaddingProps & SpaceProps

export const Button = styled.button<ButtonProps>`
  background-color: #069;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 14px;
  ${color}
  ${layout}
  ${shadow}
  ${padding}
  ${space}
`
