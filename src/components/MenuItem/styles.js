import { css } from '@emotion/react'
import {
  SansSerif,
  colorSecondary1,
  colorSecondary2,
  resetButtonStyle,
} from '/src/utils/styles'

export const menuItem = css`
  ${resetButtonStyle}

  display: block;
  padding: 18px 30px;
  width: 100%;

  font-family: ${SansSerif};
  font-size: 16px;
  font-weight: 300;
  color: ${colorSecondary1};
  text-align: left;

  // border-top: 1px solid ${colorSecondary2};
  // border-bottom: 1px solid ${colorSecondary2};
  // &:not(:first-of-type) {
  //   margin-top: -1px;
  // }
`
