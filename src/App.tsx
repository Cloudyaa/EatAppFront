import React, { useState } from 'react';
import { Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import { Navbar, SpaceFix, ScrollToTop } from 'components';
import { SearchContext } from './contexts/search.context';
import { AccountRoutes, AdminRoutes, MiscRoutes, ProductsRoutes, UserRoutes } from './routes';

export const App = () => {
  const [search, setSearch] = useState('');
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
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
    </SearchContext.Provider>
  );
};
