import { css } from '@emotion/react'
import { resetButtonStyle } from '/src/utils/styles'

export const menuButton = show => css`
  ${show && 'opacity: 0;'}
`

export const menuWrapper = show => css`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  background-color: rgba(239, 192, 167, 0.8);
  transform: translateX(-100vw);
  transition: all 400ms ease-in-out;

  ${show && 'transform: translateX(0);'}
`

export const closeButton = css`
  ${resetButtonStyle}
  position: absolute;
  top: 0;
  left: 320px;
  font-size: 20px;
  padding: 20px;
  color: white;
`
