import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('/fonts/montserrat-v15-latin-regular.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    src: local(''),
        url('/fonts/montserrat-v15-latin-500.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('/fonts/montserrat-v15-latin-700.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    src: local(''),
        url('/fonts/montserrat-v15-latin-800.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('/fonts/poppins-v15-latin-regular.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    src: local(''),
        url('/fonts/poppins-v15-latin-800.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: local(''),
        url('/fonts/poppins-v15-latin-600.woff2') format('woff2')
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    html,
    body,
    #__next {
      height: 100%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export default GlobalStyles
