import React from 'react';
import {
  ProductPrice,
  ProductTitle,
  ProductImage,
  ChangeQtyBtns,
  AddToBasketBtn,
} from 'components';

interface Props {
  name: string;
  price: number;
}

export const ProductCardMedium = ({ name, price }: Props) => {
  return (
    <div className="bestsellers__card-wrapper">
      <ProductImage productName={name} />
      <ProductTitle>{name}</ProductTitle>
      <ProductPrice>{price}</ProductPrice>
      <AddToBasketBtn />
      {/* qtyInBasket === 0  ?  <AddToBasketBtn/> : <ChangeQtyBtns />*/}
    </div>
  );
};
