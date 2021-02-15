import { css } from '@emotion/react'
import {
  SansSerif,
  colorSecondary1,
  colorSecondary2,
  resetButtonStyle,
} from '/src/utils/styles'

export const menuItem = isFirstLevel => css`
  ${resetButtonStyle}

  display: flex;
  justify-content: space-between;
  padding: 18px 30px 18px 20px;
  width: 100%;

  font-family: ${SansSerif};
  color: ${colorSecondary1};
  text-align: left;

  font-size: 14px;
  font-weight: 300;

  ${isFirstLevel &&
  `
    border-top: 1px solid ${colorSecondary2};
    font-size: 16px;
    font-weight: 600;
  `}
`

export const rightArrow = css`
  width: 13px;
  height: 13px;
`
