import React from 'react';
import {BasketFullView, OrderRedirectView} from '../views';
import { getRoutes } from './getRoutes';

export const BasketRouter = () => {
  const routes = [
    {
      path: '/',
      element: <BasketFullView />,
    },

    {
      path: '/order/checkout',
      element: <OrderRedirectView />,
    },
  ];

  return getRoutes('/basket', routes);
};
