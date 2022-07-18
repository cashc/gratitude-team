import * as styledComponents from 'styled-components';

import { DefaultTheme } from './theme';

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<DefaultTheme>;

export { css, ThemeProvider };
export default styled;
