import React from 'react';
import {BasketFullView, OrderCheckoutView} from '../views';
import { getRoutes } from './getRoutes';

export const BasketRouter = () => {
  const routes = [
    {
      path: '/',
      element: <BasketFullView />,
    },

    {
      path: '/order/checkout',
      element: <OrderCheckoutView />,
    },
  ];

  return getRoutes('/basket', routes);
};
