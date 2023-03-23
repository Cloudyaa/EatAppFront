import React from 'react';
import { BasketFullView } from '../views';
import { getRoutes } from './getRoutes';

export const BasketRouter = () => {
  const routes = [
    {
      path: '/',
      element: <BasketFullView />,
    },
  ];

  return getRoutes('/basket', routes);
};
