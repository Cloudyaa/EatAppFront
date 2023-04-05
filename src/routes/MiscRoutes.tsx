import React from 'react';
import { HomeView, CreditsView, ErrorView } from 'views';
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
      element: <ErrorView errorMessage="Page that you requested was not found" status={404} />,
    },
  ];

  return getRoutes('', routes);
};
