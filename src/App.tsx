import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import { Navbar, SpaceFix } from './components';
import { SearchContext } from './contexts/search.context';
import {
  AllProductsView,
  HomeView,
  LoggedUserView,
  LoginView,
  NotFoundView,
  SearchResultsView, SignupView,
  SingleProductView,
} from './views';

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
