import React from 'react';
import { ProductPrice, ProductName, ProductImage, AddToBasketBtn, ChangeQtyBtns } from 'components';
import { capitalizeAndSplit, pricier } from 'utils';
import { useAppDispatch } from 'store';
import { SimpleProductEntity } from 'types';
import { addToBasket, reduceQtyInBasket } from 'features/basket';
import { CardWrapperStyled } from './styles';

interface Props {
  product: SimpleProductEntity;
  qty: number;
  size?: 'small' | 'medium' | 'large';
}

export const ProductCard = ({ product, qty, size }: Props) => {
  const dispatch = useAppDispatch();
  const handleIncreaseQty = () => {
    dispatch(addToBasket({ ...product, qtyInBasket: qty }));
  };
  const handleDecreaseQty = () => {
    dispatch(reduceQtyInBasket(product.productId));
  };

  return (
    <CardWrapperStyled size={size}>
      <ProductImage size={size} productName={product.name} />
      <ProductName size={size}>{capitalizeAndSplit(product.name)}</ProductName>
      <ProductPrice size={size}>{pricier.format(product.price)}</ProductPrice>
      {qty === 0 ? (
        <AddToBasketBtn add={handleIncreaseQty} />
      ) : (
        <ChangeQtyBtns size={size} add={handleIncreaseQty} remove={handleDecreaseQty} qty={qty} />
      )}
    </CardWrapperStyled>
  );
};
