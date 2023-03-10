import React from 'react';
import { LoggedUserView, LoginView, SignupView } from '../views';
import { getRoutes } from './getRoutes';

export const UserRoutes = () => {
  const routes = [
    {
      path: '/signup',
      element: <SignupView />,
    },
    {
      path: '/login',
      element: <LoginView />,
    },
    {
      path: '/login/:user_id',
      element: <LoggedUserView />,
    },
  ];

  return getRoutes('/user', routes);
};
