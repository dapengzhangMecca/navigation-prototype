import { css } from '@emotion/react'
import {
  SansSerif,
  colorSecondary1,
  colorSecondary2,
  resetButtonStyle,
} from '/src/utils/styles'

export const menuItem = hasBorder => css`
  ${resetButtonStyle}

  display: flex;
  justify-content: space-between;
  padding: 18px 30px;
  width: 100%;

  font-family: ${SansSerif};
  font-size: 16px;
  font-weight: 300;
  color: ${colorSecondary1};
  text-align: left;

  ${hasBorder &&
  `
    border-bottom: 1px solid ${colorSecondary2};
    &:first-of-type {
      border-top: 1px solid ${colorSecondary2};
    }
  `}
`

export const rightArrow = css`
  width: 10px;
  height: 10px;
`
