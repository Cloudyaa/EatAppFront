import React from 'react';
import { LoginPage, SignupPage } from '../views';
import { getRoutes } from './getRoutes';

export const AccountRoutes = () => {
  const routes = [
    {
      path: '/signup',
      element: <SignupPage />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
  ];

  return getRoutes('/account', routes);
};
