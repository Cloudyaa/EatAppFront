import React from 'react';
import { SubPageWrapper } from 'components';

import {
  BasketProducts,
  BasketTotalPrice,
  ClearBasketBtn,
  DeliveryInfo,
  DiscountInfo,
  ProceedToCheckoutBtn,
} from 'views';
import { BackToProductsBtn } from './BackToProductsBtn';

export const BasketFullView = () => {
  return (
    <SubPageWrapper addSx={{ textAlign: 'left' }}>
      <ClearBasketBtn />
      <DeliveryInfo />
      <BasketProducts />
      <BackToProductsBtn />
      <BasketTotalPrice />
      <DiscountInfo />
      <ProceedToCheckoutBtn />
    </SubPageWrapper>
  );
};
