import React from 'react';
import { BasketRedirectView, OrderRedirectView, OrderSuccessView } from 'views';
import { getRoutes } from './getRoutes';
import { OrderPaymentView } from '../views/order/checkout/OrderPaymentView';

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
      path: '/order/payment',
      element: <OrderPaymentView />,
    },

    {
      path: '/order/success/:order_number',
      element: <OrderSuccessView />,
    },
  ];

  return getRoutes('/basket', routes);
};
