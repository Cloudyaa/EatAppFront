import React from 'react';
import { ProductCard, SectionHeader, SectionWrapper, SpaceFix, SubPageWrapper } from 'components';
import { EmptyBasketView } from './EmptyBasketView';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store';
import { BasketItemStyled, ButtonStyled, BasketGridContainerStyled } from 'styles';
import { Close } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { clearBasket, removeFromBasket } from 'features/basket';
import { pricier } from 'utils';

export const BasketFullView = () => {
  const basket = useSelector((state: RootState) => state.basket);
  const dispatch = useAppDispatch();

  console.log(`Products: ${basket.totalQty} for price of: ${basket.totalPrice.toFixed(2)}`);

  return (
    <SectionWrapper classes="basket__full">
      <SectionHeader>Your basket</SectionHeader>
      {basket.products.length === 0 ? (
        <EmptyBasketView />
      ) : (
        <SubPageWrapper addSx={{ textAlign: 'left' }}>
          <ButtonStyled onClick={() => dispatch(clearBasket())}>Clear basket</ButtonStyled>
          <SpaceFix />

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

          <SpaceFix />

          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
            <h3>Total price</h3>
            <h3>{pricier.format(basket.totalPrice)}</h3>
          </Box>
        </SubPageWrapper>
      )}
    </SectionWrapper>
  );
};