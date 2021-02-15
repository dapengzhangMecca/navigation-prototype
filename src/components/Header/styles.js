import { css } from '@emotion/react'
import {
  resetButtonStyle,
  colorSecondary1,
  colorSecondary3,
} from '/src/utils/styles'

export const banner = css`
  padding: 25px 15px;
  font-size: 12px;
  text-align: center;
  color: ${colorSecondary1};
  background: ${colorSecondary3};
`

export const inlineWrapper = css`
  padding: 21px 18px;
  display: flex;
  justify-content: space-between;

  .logo {
    vertical-align: middle;
    width: 122px;
    height: 25px;
  }
  div {
    display: inline-block;
  }

  .icon {
    display: inline-block;
    width: 14px;
    padding: 0 10px;
  }
`

export const menuButton = css`
  ${resetButtonStyle}
  color: ${colorSecondary1};
  font-size: 12px;
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

export const innerWrapper = css`
  width: 320px;

  @media (max-width: 360px) {
    width: 260px;
  }
`

export const closeButton = css`
  ${resetButtonStyle}
  position: absolute;
  top: 0;
  left: 320px;
  font-size: 20px;
  padding: 20px;
  color: white;
  font-weight: 900;

  @media (max-width: 360px) {
    left: 260px;
  }
`
