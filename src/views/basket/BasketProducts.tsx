import React from 'react';
import { BasketGridContainerStyled } from './BasketGridContainer.styled';
import { BasketItemStyled } from './BasketItem.styled';
import { ProductCard } from 'components';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { removeFromBasket } from 'features/basket';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store';

export const BasketProducts = () => {
  const basket = useSelector((state: RootState) => state.basket);
  const dispatch = useAppDispatch();

  return (
    <BasketGridContainerStyled>
      {basket.products.map((one) => (
        <BasketItemStyled key={one.productId}>
          <ProductCard product={one} qty={one.qtyInBasket} size="small" />
          <IconButton>
            <Close onClick={() => dispatch(removeFromBasket(one.productId))} />
          </IconButton>
        </BasketItemStyled>
      ))}
    </BasketGridContainerStyled>
  );
};
