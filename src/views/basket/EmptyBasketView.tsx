import React from 'react';
import ProductionQuantityLimitsRoundedIcon from '@mui/icons-material/ProductionQuantityLimitsRounded';
import { ButtonLink, SpaceFix, SubPageWrapper } from 'components';

export const EmptyBasketView = () => {
  return (
    <SubPageWrapper>
      <ProductionQuantityLimitsRoundedIcon sx={{ fontSize: 'max(5rem, 15cqi)', mb: 4 }} />
      <h3>Your basket is empty</h3>
      <SpaceFix />

      <ButtonLink color="light" size="lg" to="/products/search">
        Browse products
      </ButtonLink>
    </SubPageWrapper>
  );
};
