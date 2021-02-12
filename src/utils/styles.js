export const breakpoints = {
  legacy: '375px',
  mobile: '440px',
  tablet: '640px',
  tablet768: '768px',
  laptop: '1024px',
  smallDesktop: '1280px',
  desktop: '1300px',
  xl: '1700px',
  xxl: '2300px',
}

const BASE_URL = 'https://static.mecca.com.au/fonts/201810161028/ecb'

export const globalFont = `
  @font-face {
    font-family: 'ECB';
    src: url('${BASE_URL}/EuclidCircularB-Light-WebS.woff2') format('woff2'),
      url('${BASE_URL}/EuclidCircularB-Light-WebS.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'ECB';
    src: url('${BASE_URL}/EuclidCircularB-LightItalic-WebS.woff2')
        format('woff2'),
      url('${BASE_URL}/EuclidCircularB-LightItalic-WebS.woff') format('woff');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'ECB';
    src: url('${BASE_URL}/EuclidCircularB-Regular-WebS.woff2') format('woff2'),
      url('${BASE_URL}/EuclidCircularB-Regular-WebS.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'ECB';
    src: url('${BASE_URL}/EuclidCircularB-RegularItalic-WebS.woff2')
        format('woff2'),
      url('${BASE_URL}/EuclidCircularB-RegularItalic-WebS.woff') format('woff');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'ECB';
    src: url('${BASE_URL}/EuclidCircularB-Medium-WebS.woff2') format('woff2'),
      url('${BASE_URL}/EuclidCircularB-Medium-WebS.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'ECB';
    src: url('${BASE_URL}/EuclidCircularB-MediumItalic-WebS.woff2')
        format('woff2'),
      url('${BASE_URL}/EuclidCircularB-MediumItalic-WebS.woff') format('woff');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'ECB';
    src: url('${BASE_URL}/EuclidCircularB-Semibold-WebS.woff2') format('woff2'),
      url('${BASE_URL}/EuclidCircularB-Semibold-WebS.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'ECB';
    src: url('${BASE_URL}/EuclidCircularB-SemiboldItalic-WebS.woff2')
        format('woff2'),
      url('${BASE_URL}/EuclidCircularB-SemiboldItalic-WebS.woff') format('woff');
    font-weight: 700;
    font-style: italic;
  }
`

export const SansSerif = "'ECB',arial,sans-serif"

export const colorSecondary1 = '#181818'
export const colorSecondary2 = '#666666'
export const colorSecondary3 = '#888888'
export const colorSecondary31 = '#999999'
export const colorSecondary4 = '#BABABA'
export const colorSecondary5 = '#DADADA'
export const colorSecondary6 = '#fff6f4'

export const resetButtonStyle = `
  border: 0;
  background: transparent;
  outline: 0;
  cursor: pointer;
`
