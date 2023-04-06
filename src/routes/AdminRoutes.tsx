import React from 'react';
import { getRoutes } from './getRoutes';
import { AdminDashboard } from 'views';

export const AdminRoutes = () => {
  const routes = [
    {
      path: '/:admin_id/dashboard',
      element: <AdminDashboard />,
    },
  ];

  return getRoutes('/admin', routes);
};
