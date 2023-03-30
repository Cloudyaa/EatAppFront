import React from 'react';
import { BasketFullView, OrderRedirectView } from '../views';
import { getRoutes } from './getRoutes';
import { OrderSuccessView } from '../views/order';

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

    {
      path: '/order/success',
      element: <OrderSuccessView />,
    },
  ];

  return getRoutes('/basket', routes);
};
