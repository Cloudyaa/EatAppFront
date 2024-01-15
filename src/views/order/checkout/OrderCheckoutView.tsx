import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { RootState } from 'store';
import { apiUrl } from 'config';
import { useDiscount } from 'hooks';
import { OrderDTO, OrderedProductEntity, StripeSessionResponse, SuccessOrderResponse } from 'types';
import { ButtonStyled, FlexLink, SectionHeader, SectionWrapper, SubPageWrapper } from 'components';
import { CheckoutTable } from './CheckoutTable';
import { loadStripe } from '@stripe/stripe-js';

const STRIPE_SECRET = import.meta.env.VITE_STRIPE_SECRET;
const stripePromise = loadStripe(STRIPE_SECRET);

export const OrderCheckoutView = () => {
  const basket = useSelector((state: RootState) => state.basket);
  const { totalAtCheckout } = useDiscount();

  const [cookies] = useCookies();

  const [orderId, setOrderId] = useState<string | null>(null);

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

  const handleCheckout = async () => {
    try {
      const res = await fetch(`${apiUrl}/user/${cookies.userId}/order/new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookies.token}`,
        },
        body: JSON.stringify(userOrder),
      });

      if (res.ok) {
        const data: SuccessOrderResponse = await res.json();
        setOrderId(data.orderId);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (orderId) {
      handlePayment();
    }
  }, [orderId]);

  const handlePayment = async () => {
    try {
      const res = await fetch(`${apiUrl}/user/${cookies.userId}/order/payment/${orderId}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookies.token}`,
        },
      });

      if (res.ok) {
        const data: StripeSessionResponse = await res.json();

        const stripe = await stripePromise;

        await stripe?.redirectToCheckout({
          sessionId: data.session.id,
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SectionWrapper classes="order__checkout">
      <SectionHeader>Checkout</SectionHeader>
      <SubPageWrapper>
        <h3>Your order summary</h3>
        <CheckoutTable />
        <ButtonStyled onClick={handleCheckout}>Checkout</ButtonStyled>
        <FlexLink to={'/basket'} text={'Something wrong?'}>
          Back to basket
        </FlexLink>
      </SubPageWrapper>
    </SectionWrapper>
  );
};
