import React from 'react';
import { UserDashboard } from '../views';
import { getRoutes } from './getRoutes';

export const UserRoutes = () => {
  const routes = [
    {
      path: '/dashboard/:user_id',
      element: <UserDashboard />,
    },
  ];

  return getRoutes('/user', routes);
};
