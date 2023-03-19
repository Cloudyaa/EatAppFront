import React from 'react';
import { ProductPrice, ProductTitle, ProductImage, AddToBasketBtn } from 'components';

interface Props {
  name: string;
  price: number;
}

export const ProductCardMedium = ({ name, price }: Props) => {
  const splitByCapitalLetter = (str: string) => {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    const strArr: string[] = str.split(/(?=[A-Z])/);
    if (strArr.length > 1) {
      for (let i = 1; i < strArr.length; i++) {
        strArr[i] = ' ' + strArr[i].toLowerCase();
      }
    }
    return strArr.join('');
  };

  return (
    <div className="bestsellers product-card__wrapper medium">
      <ProductImage productName={name} />
      <ProductTitle>{splitByCapitalLetter(name)}</ProductTitle>
      <ProductPrice>{price}</ProductPrice>
      <AddToBasketBtn />
      {/* qtyInBasket === 0  ?  <AddToBasketBtn/> : <ChangeQtyBtns />*/}
    </div>
  );
};
