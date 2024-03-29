import React, { useState } from 'react';
import { Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import { Navbar, SpaceFix, ScrollToTop } from 'components';
import { SearchContext } from './contexts/search.context';
import {
  AccountRoutes,
  AdminRoutes,
  MiscRoutes,
  ProductsRoutes,
  UserRoutes,
  BasketRouter,
} from './routes';

import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyles, theme } from 'styles';
import { Global } from '@emotion/react';

export const App = () => {
  const [search, setSearch] = useState('');
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
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
              {BasketRouter()}
              {MiscRoutes()}
            </>
          </Routes>
        </Container>
      </ThemeProvider>
    </SearchContext.Provider>
  );
};
