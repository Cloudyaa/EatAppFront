import React from 'react';
import {
  ButtonLinkStyled,
  ButtonStyled,
  HashLinkStyled,
  ProductCard,
  SectionHeader,
  SectionWrapper,
  SpaceFix,
  SubPageWrapper,
  FlexTextWrapper,
  FatFontStyled,
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

  const toSpend = basket.totalValue < 50 ? 50 - basket.totalValue : 0;

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

          {toSpend > 0 && (
            <Typography
              sx={{
                fontSize: '1.1rem',
                color: colors.primary.light,
                marginBottom: 2,
              }}
            >
              Spend&nbsp;
              <FatFontStyled as="span" color="light">
                {pricier.format(toSpend)}
              </FatFontStyled>
              &nbsp;more to get free delivery!
            </Typography>
          )}

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

          <FlexTextWrapper>
            <Typography variant="body2">Forgot something?</Typography>
            <HashLinkStyled color={'light'} size={'inherit'} to={'/products/search'}>
              Back to products
            </HashLinkStyled>
          </FlexTextWrapper>

          <Box
            sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', marginBlock: 5 }}
          >
            <h3>Total price</h3>
            <h3>{pricier.format(basket.totalValue)}</h3>
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
