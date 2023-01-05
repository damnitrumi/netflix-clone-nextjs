import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global-styles';
import { theme } from '../src/styles/theme';
import '../public/assets/fonts/styles.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'light',
        value: '#FFF',
      },
      {
        name: 'dark',
        value: '#000',
      },
    ],
  },
  layout: "fullscreen"

};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <div style={{height: '200vh'}}>
        <Story />
        <GlobalStyles />
      </div>
    </ThemeProvider>
  ),
];
