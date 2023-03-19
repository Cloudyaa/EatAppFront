import React from 'react';
import { ProductPrice, ProductTitle, ProductImage, AddToBasketBtn } from 'components';
import { capitalize } from '@mui/material';

interface Props {
  name: string;
  price: number;
}

export const ProductCardMedium = ({ name, price }: Props) => {
  return (
    <div className="bestsellers product-card__wrapper medium">
      <ProductImage productName={name} />
      <ProductTitle>{capitalize(name)}</ProductTitle>
      <ProductPrice>{price}</ProductPrice>
      <AddToBasketBtn />
      {/* qtyInBasket === 0  ?  <AddToBasketBtn/> : <ChangeQtyBtns />*/}
    </div>
  );
};
