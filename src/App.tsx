import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomeView } from './views/HomeView';
import { AllProductsView } from './views/products/AllProductsView';
import { NotFoundView } from './views/NotFoundView';
import { SingleProductView } from './views/products/SingleProductView';
import { LoginView } from './views/user/LoginView';
import { SignupView } from './views/user/SignupView';
import { LoggedUserView } from './views/user/LoggedUserView';

// import {ProductEntity} from 'types';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<HomeView />} />
        <Route path={'/products/show'} element={<AllProductsView />} />
        <Route path={'/products/:product_id'} element={<SingleProductView />} />
        <Route path={'/auth/login'} element={<LoginView />} />
        <Route path={'/auth/signup'} element={<SignupView />} />
        {/* prettier-ignore */}
        <Route path={'/auth/login/user/:user_id'} element={<LoggedUserView />} />
        <Route path={'*'} element={<NotFoundView />} />
      </Routes>
    </div>
  );
};
