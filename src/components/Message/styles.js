import { css } from '@emotion/react'
import { SansSerif, colorSecondary1, breakpoints } from '/src/utils/styles'

export const container = css`
  font-family: ${SansSerif};
  color: ${colorSecondary1};
  padding: 200px 0;
  font-size: 30px;
  line-height: 1.1;
  font-weight: 300;
  width: 300px;
  margin: auto;

  @media (min-width: ${breakpoints.laptop}) {
    width: 700px;
  }
`
