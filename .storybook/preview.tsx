import React from 'react';
import { MemoryRouter } from 'react-router';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import GlobalStyles from '../src/styles/GlobalStyles';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
//decorators에 적용하기
export const decorators = [
  Story => (
    <MemoryRouter initialEntries={['/']}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </MemoryRouter>
  ),
];

export default preview;
