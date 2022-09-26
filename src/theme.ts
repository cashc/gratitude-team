const theme = {
  primary: '#3BAFFE',
  primaryAlt: '#0AD1E7',
  primaryGradient: ['#3BAFFE', '#0AD1E7'],
  black: '#000',
  darkBlue: '#172A56',
  gray: '#EEF5FF',
  lightGray: '#F9FBFF',
  background: '#FAF6F4',
  backgroundLight: '#ffffffa1',
  text: '#172A56',
  textlight: '#54619F',
  white: '#fff',
  success: '#2DCB48',
  failure: '#F43319',
  warning: '#FCB023',
  textInputBackground: '#EEF5FF',
  border: '#ECECED',
  borderDisabled: '#dedede',
  borderFocus: '#99a3c4',
  borderHover: '#dfdfe0',
  switch: {
    active: '#172A56',
    inactive: '#47779F',
  },
  shadow: '2px 2px 10px rgba(0, 0, 0, 0.10)',
  size: {
    mobileSmall: '375px',
    mobile: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  },
};

export type DefaultTheme = typeof theme;

export default theme;
