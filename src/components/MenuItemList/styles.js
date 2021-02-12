import { css } from '@emotion/react'
import {
  SansSerif,
  colorSecondary1,
  colorSecondary2,
  colorSecondary3,
  colorSecondary4,
  resetButtonStyle,
} from '/src/utils/styles'

export const menuItemListWrapper = css`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 320px;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background: white;
  transition: all 400ms ease-in-out;
  transform: translateX(-320px);

  @media (max-width: 360px) {
    width: 260px;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  &.slide-in {
    transform: translateX(0);
  }

  &.slide-out {
    transform: translateX(-320px);
  }
`

export const backButton = css`
  ${resetButtonStyle}
  padding: 18px 30px;
  font-size: 32px;
`

export const categoryName = css`
  padding: 18px 30px;
  width: 100%;
  font-family: ${SansSerif};
  font-size: 18px;
  font-weight: 500;
  color: ${colorSecondary1};
  text-align: left;
`

export const hr = css`
  border-top: 1px solid ${colorSecondary2};
`

export const categoryLink = css`
  ${resetButtonStyle}
  display: block;
  padding: 18px 30px;
  width: 100%;

  font-family: ${SansSerif};
  font-size: 16px;
  font-weight: 300;
  text-align: left;

  &,
  &:active,
  &:focus,
  &:hover,
  &:visited {
    color: ${colorSecondary1};
    text-decoration: none;
  }
`

export const menuHeadPlaceholder = css`
  margin-top: 30px;
`

export const navigationFooter = css`
  background: ${colorSecondary1};
  padding: 20px 5px 106px;

  div {
    padding: 20px;
    display: flex;

    span {
      padding-left: 20px;
      font-family: ${SansSerif};
      color: ${colorSecondary3};
    }

    .dot {
      padding: 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: ${colorSecondary4};
    }
  }
`
