import React from 'react';
import { BasketFull } from '../views';
import { getRoutes } from './getRoutes';

export const BasketRouter = () => {
  const routes = [
    {
      path: '/',
      element: <BasketFull />,
    },
  ];

  return getRoutes('/basket', routes);
};
