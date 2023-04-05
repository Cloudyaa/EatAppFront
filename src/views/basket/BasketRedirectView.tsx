import React from 'react';
import { SectionHeader, SectionWrapper } from 'components';
import { EmptyBasketView } from './EmptyBasketView';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { BasketFullView } from './BasketFullView';

export const BasketRedirectView = () => {
  const basket = useSelector((state: RootState) => state.basket);
  return (
    <SectionWrapper classes="basket__full">
      <SectionHeader>Your basket</SectionHeader>
      {basket.products.length === 0 ? <EmptyBasketView /> : <BasketFullView />}
    </SectionWrapper>
  );
};
