import React from 'react';
import {
  ProductPrice,
  ProductName,
  ProductImage,
  AddToBasketBtn,
  ChangeQtyBtns,
  ProductDescription,
} from 'components';
import { capitalizeAndSplit, pricier } from 'utils';
import { useAppDispatch } from 'store';
import { ProductEntity, SimpleProductEntity } from 'types';
import { addToBasket, reduceQtyInBasket } from 'features/basket';
import { CardWrapperStyled } from './styles';
import { useNavigate } from 'react-router-dom';

interface Props {
  product: SimpleProductEntity | ProductEntity;
  qty: number;
  size?: 'small' | 'medium' | 'large' | 'xl';
}

export const ProductCard = ({ product, qty, size }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isProductEntity = (
    product: SimpleProductEntity | ProductEntity,
  ): product is ProductEntity => (product as ProductEntity).description !== undefined;

  const handleIncreaseQty = () => {
    dispatch(addToBasket({ ...product, qtyInBasket: qty }));
  };
  const handleDecreaseQty = () => {
    dispatch(reduceQtyInBasket(product.productId));
  };

  return (
    <CardWrapperStyled size={size} onClick={() => navigate(`/products/${product.productId}`)}>
      <ProductImage size={size} productName={product.name} />
      <ProductName size={size}>{capitalizeAndSplit(product.name)}</ProductName>
      {isProductEntity(product) && size === 'xl' && (
        <ProductDescription description={product.description} />
      )}
      <ProductPrice size={size}>{pricier.format(product.price)}</ProductPrice>
      {qty === 0 ? (
        <AddToBasketBtn add={handleIncreaseQty} />
      ) : (
        <ChangeQtyBtns size={size} add={handleIncreaseQty} remove={handleDecreaseQty} qty={qty} />
      )}
    </CardWrapperStyled>
  );
};
