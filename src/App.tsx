import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomeView } from './views/home/HomeView';
import { AllProductsView } from './views/products/AllProductsView';
import { NotFoundView } from './views/NotFoundView';
import { SingleProductView } from './views/products/SingleProductView';
import { LoginView } from './views/user/LoginView';
import { SignupView } from './views/user/SignupView';
import { LoggedUserView } from './views/user/LoggedUserView';
import { SearchResultsView } from './views/products/SearchResultsView';
import { Container } from '@mui/material';
import { Navbar, SpaceFix } from './components';
import { SearchContext } from './contexts/search.context';

export const App = () => {
  const [search, setSearch] = useState('');
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <Container maxWidth={false} disableGutters>
        <Navbar />
        <SpaceFix />
        <Routes>
          <Route path={'/'} element={<HomeView />} />
          <Route path={'/products/search'} element={<AllProductsView />} />
          <Route path={'/products/search/:search_query'} element={<SearchResultsView />} />
          <Route path={'/products/:product_id'} element={<SingleProductView />} />
          <Route path={'/user/signup'} element={<SignupView />} />
          <Route path={'/user/login'} element={<LoginView />} />
          <Route path={'/user/login/:user_id'} element={<LoggedUserView />} />
          <Route path={'*'} element={<NotFoundView />} />
        </Routes>
      </Container>
    </SearchContext.Provider>
  );
};
