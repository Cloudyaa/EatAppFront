import React from 'react';
import { useCookies } from 'react-cookie';

import { PleaseLogInView } from '../error';
import { OrderCheckoutView } from './OrderCheckoutView';

export const OrderRedirectView = () => {
  const [cookies] = useCookies(['token']);
  return <>{cookies.token ? <OrderCheckoutView /> : <PleaseLogInView />}</>;
};
