import React, { useState } from 'react';
import { Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import { Navbar, SpaceFix, ScrollToTop } from 'components';
import { SearchContext } from './contexts/search.context';
import { AccountRoutes, AdminRoutes, MiscRoutes, ProductsRoutes, UserRoutes } from './routes';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#32515b', // your custom color here
    },
    secondary: {
      main: '#ffa101',
    },
  },
});

export const App = () => {
  const [search, setSearch] = useState('');
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <ThemeProvider theme={theme}>
        <Container maxWidth={false} disableGutters>
          <Navbar />
          <SpaceFix />
          <ScrollToTop showBelow={250} />
          <Routes>
            <>
              {ProductsRoutes()}
              {UserRoutes()}
              {AdminRoutes()}
              {AccountRoutes()}
              {MiscRoutes()}
            </>
          </Routes>
        </Container>
      </ThemeProvider>
    </SearchContext.Provider>
  );
};
