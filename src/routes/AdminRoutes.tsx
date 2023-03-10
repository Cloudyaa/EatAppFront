import React from 'react';
import { getRoutes } from './getRoutes';
import { AdminPanelView } from '../views';

export const AdminRoutes = () => {
  const routes = [
    {
      path: '',
      element: <AdminPanelView />,
    },
  ];

  return getRoutes('/admin', routes);
};
