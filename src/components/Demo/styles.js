import { css } from '@emotion/react'
import { breakpoints } from '/src/utils/styles'

export const desktopView = css`
  display: none;
  background: white;

  @media (min-width: ${breakpoints.laptop}) {
    display: block;
  }
`

export const mobileView = css`
  display: block;
  background: white;

  @media (min-width: ${breakpoints.laptop}) {
    display: none;
  }
`

export const mockedSite = css`
  width: 100vw;

  img {
    width: 100%;
  }
`
