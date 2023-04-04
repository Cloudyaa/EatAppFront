import React from 'react';
import { BasketRedirectView, OrderRedirectView, OrderSuccessView } from 'views';
import { getRoutes } from './getRoutes';

export const BasketRouter = () => {
  const routes = [
    {
      path: '/',
      element: <BasketRedirectView />,
    },

    {
      path: '/order/checkout',
      element: <OrderRedirectView />,
    },

    {
      path: '/order/success/:order_number',
      element: <OrderSuccessView />,
    },
  ];

  return getRoutes('/basket', routes);
};
