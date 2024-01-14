import React from 'react';

import {
  ButtonLinkStyled,
  FlexLink,
  SectionHeader,
  SectionWrapper,
  SubPageWrapper,
} from 'components';
import { CheckoutTable } from './CheckoutTable';

export const OrderCheckoutView = () => {
  return (
    <SectionWrapper classes="order__checkout">
      <SectionHeader>Checkout</SectionHeader>
      <SubPageWrapper>
        <h3>Your order summary</h3>
        <CheckoutTable />
        <ButtonLinkStyled to={'/basket/order/payment'} color="light">
          Checkout
        </ButtonLinkStyled>
        <FlexLink to={'/basket'} text={'Something wrong?'}>
          Back to basket
        </FlexLink>
      </SubPageWrapper>
    </SectionWrapper>
  );
};
