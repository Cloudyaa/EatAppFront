import React from 'react';
import { ProductCardMedium, SectionHeader, SectionWrapper } from 'components';
import { useSkeletons } from '../../hooks/useSkeletons';
import { SimpleProductEntity } from 'types';
import { EmptyBasketView } from './EmptyBasketView';

export const BasketFull = () => {
  const { skeletons } = useSkeletons('md', 3);

  const basket: SimpleProductEntity[] = [];

  return (
    <SectionWrapper classes="basket__full">
      <SectionHeader>Your basket</SectionHeader>
      {basket.length === 0 ? (
        <EmptyBasketView />
      ) : (
        <div className="auto-grid-container">
          {basket.map((one) => (
            <ProductCardMedium name={one.name} price={one.price} key={one.productId} />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
};
