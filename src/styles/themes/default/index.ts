export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem',
  },
  border: {
    radius: {
      small: '0.4rem',
      huge: '4.6rem',
    },
  },
  font: {
    family:
      "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    title: 'Poppins',
    regular: 400,
    medium: 500,
    bold: 700,
    extraBold: 800,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '2.2rem',
      xlarge: '2.4rem',
      xxlarge: '3.6rem',
      huge: '7.4rem',
    },
  },
  colors: {
    primary: '#3A5AFF',
    secondary: '#B9B9B9',
    hover: '#FFC43B',
    grayBg: '#F2F2F2',
    white: '#FFFFFF',
    lightBlack: '#544837',
    black: '#2F281E',
    darker: '#333333',
    dark: '#000000',
    lightGray: '#EFEFEF',
    gray: '#979797',
    blue: '#3CC5FF',
    red: '#FF3B53',
    yellow: '#FFC43B',
    purple: '#46178F',
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.5rem',
    small: '3.0rem',
    medium: '3.5rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.2rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
} as const
