import React, { FC } from 'react';

import { ThemeProvider } from 'styled-components';

import theme from 'configs/theme';

import GlobalStyles from 'assets/styles';

import Routes from 'app/routes';

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Routes />
  </ThemeProvider>
);

export default App;