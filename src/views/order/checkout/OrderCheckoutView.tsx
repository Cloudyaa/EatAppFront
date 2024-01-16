import React from 'react';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { RootState } from 'store';
import { useDiscount } from 'hooks';
import { OrderDTO, OrderedProductEntity } from 'types';
import { FlexLink, SectionHeader, SectionWrapper, SubPageWrapper } from 'components';
import { CheckoutTable } from './CheckoutTable';
import { Divider } from '@mui/material';

import { PayPal } from './PayPal';
import { Stripe } from './Stripe';

export interface PaymentProps {
  userOrder: OrderDTO;
}

export const OrderCheckoutView = () => {
  const basket = useSelector((state: RootState) => state.basket);
  const { totalAtCheckout } = useDiscount();
  const [cookies] = useCookies();

  const orderedProducts: OrderedProductEntity[] = basket.products.map((product) => {
    return {
      productId: product.productId,
      name: product.name,
      price: product.price,
      orderedQty: product.qtyInBasket,
    };
  });

  const userOrder: OrderDTO = {
    products: orderedProducts,
    totalQty: basket.totalQty,
    totalValue: Number(totalAtCheckout.toFixed(2)),
    userId: cookies.userId,
  };

  return (
    <SectionWrapper classes="order__checkout">
      <SectionHeader>Checkout</SectionHeader>
      <SubPageWrapper>
        <h3>Your order summary</h3>
        <CheckoutTable />
        <PayPal userOrder={userOrder} />
        <Divider>OR</Divider>
        <Stripe userOrder={userOrder} />
        <FlexLink to={'/basket'} text={'Something wrong?'}>
          Back to basket
        </FlexLink>
      </SubPageWrapper>
    </SectionWrapper>
  );
};
