import React from 'react';
import { HomeView, NotFoundView } from '../views';
import { getRoutes } from './getRoutes';

export const MiscRoutes = () => {
  const routes = [
    {
      path: '',
      element: <HomeView />,
    },
    {
      path: '*',
      element: <NotFoundView />,
    },
  ];

  return getRoutes('/', routes);
};
