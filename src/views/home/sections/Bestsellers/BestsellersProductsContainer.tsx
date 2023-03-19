import React from 'react';
import { ProductCardMedium } from 'components';

export const BestsellersProductsContainer = () => {
  return (
    <div className="auto-grid-container bestsellers__cards-container">
      <ProductCardMedium name="tomatoes" price={3.49} />
      <ProductCardMedium name="carrots" price={3.49} />
      <ProductCardMedium name="lettuce" price={3.49} />
    </div>
  );
};
