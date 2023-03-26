import React from 'react';
import ProductionQuantityLimitsRoundedIcon from '@mui/icons-material/ProductionQuantityLimitsRounded';
import { ButtonLinkStyled, SpaceFix, SubPageWrapper } from 'components';

export const EmptyBasketView = () => {
  return (
    <SubPageWrapper>
      <ProductionQuantityLimitsRoundedIcon sx={{ fontSize: 'max(5rem, 15cqi)', mb: 4 }} />
      <h3>Your basket is empty</h3>
      <SpaceFix />

      <ButtonLinkStyled size="large" to="/products/search">
        Browse products
      </ButtonLinkStyled>
    </SubPageWrapper>
  );
};
