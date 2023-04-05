import React from 'react';
import { ButtonLinkStyled } from 'components';

export const ProceedToCheckoutBtn = () => (
  <ButtonLinkStyled to={'/basket/order/checkout'} size={'large'}>
    Proceed to checkout
  </ButtonLinkStyled>
);

