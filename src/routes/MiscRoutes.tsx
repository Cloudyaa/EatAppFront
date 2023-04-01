import React from 'react';
import { HomeView, CreditsView, NotFoundView } from '../views';
import { getRoutes } from './getRoutes';

export const MiscRoutes = () => {
  const routes = [
    {
      path: '/',
      element: <HomeView />,
    },
    {
      path: '/credits',
      element: <CreditsView />,
    },

    {
      path: '/*',
      element: <NotFoundView />,
    },
  ];

  return getRoutes('', routes);
};
