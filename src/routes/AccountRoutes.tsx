import React from 'react';
import { LoginPage, SignupPage, SuccessSignupPage } from '../views';
import { getRoutes } from './getRoutes';

export const AccountRoutes = () => {
  const routes = [
    {
      path: '/signup',
      element: <SignupPage />,
    },

    {
      path: '/signup/success',
      element: <SuccessSignupPage />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
  ];

  return getRoutes('/account', routes);
};
