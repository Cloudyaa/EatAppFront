import React from 'react';
import { UserDashboard } from '../views';
import { getRoutes } from './getRoutes';

export const UserRoutes = () => {
  const routes = [
    {
      path: '/:user_id/dashboard',
      element: <UserDashboard />,
    },
  ];

  return getRoutes('/user', routes);
};
