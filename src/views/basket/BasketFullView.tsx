import React from 'react';
import {
  ButtonLinkStyled,
  ButtonStyled, HashLinkStyled,
  ProductCard,
  SectionHeader,
  SectionWrapper,
  SpaceFix,
  SubPageWrapper,
} from 'components';
import { EmptyBasketView } from './EmptyBasketView';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store';
import { Close } from '@mui/icons-material';
import { Box, Chip, IconButton, Typography } from '@mui/material';
import { clearBasket, removeFromBasket } from 'features/basket';
import { pricier } from 'utils';
import { BasketItemStyled } from './BasketItem.styled';
import { BasketGridContainerStyled } from './BasketGridContainer.styled';
import { colors } from 'styles';

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
              <ButtonStyled onClick={() => dispatch(clearBasket())} color={'dark'}>
                Clear basket
              </ButtonStyled>
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
                <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      fontSize: '0.9rem',
                      mt: 1,
                    }}
                >
                  <Typography variant="body2" display="block">
                    Forgot something?
                  </Typography> <HashLinkStyled color={'light'} size={'inherit'} to={'/products/search'}>Back to products
                </HashLinkStyled>
                </Box>
              </BasketGridContainerStyled>

              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', marginBlock: 5}}>
                <h3>Total price</h3>
                <h3>{pricier.format(basket.totalPrice)}</h3>
              </Box>
              <Chip
                  label={'If you are eligible for discount, it will be applied on the next step'}
                  sx={{ color: colors.dark.light, marginBlock: 2 }}
              ></Chip>

              <ButtonLinkStyled to={'/basket/order/checkout'} size={'large'}>
                Proceed to checkout
              </ButtonLinkStyled>
            </SubPageWrapper>
        )}
      </SectionWrapper>
  );
};
