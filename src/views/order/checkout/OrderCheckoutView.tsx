import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { RootState } from 'store';
import { apiUrl } from 'config';
import { useDiscount } from 'hooks';
import { OrderDTO, OrderedProductEntity, StripeSessionResponse, SuccessOrderResponse } from 'types';
import {
  ButtonStyled,
  FlexEvenlyWrapper,
  FlexLink,
  SectionHeader,
  SectionWrapper,
  SubPageWrapper,
} from 'components';
import { CheckoutTable } from './CheckoutTable';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate } from 'react-router-dom';
import { FaCcMastercard, FaCcVisa, FaPaypal } from 'react-icons/fa6';
import { Divider } from '@mui/material';

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
        <ButtonStyled onClick={() => null}>
          <FlexEvenlyWrapper
            addSx={{
              alignItems: 'center',
              gap: 2,
            }}
          >
            <FaPaypal />
            <span>Pay with PayPal</span>
          </FlexEvenlyWrapper>
        </ButtonStyled>

        <Divider>OR</Divider>

        <ButtonStyled onClick={handleCheckout}>
          <FlexEvenlyWrapper
            addSx={{
              alignItems: 'center',
              gap: 2,
            }}
          >
            <FaCcMastercard />
            <FaCcVisa />
            <img
              src={
                'https://www.przelewy24.pl/themes/przelewy24/assets/img/base/przelewy24_logo_2022.svg'
              }
              width={40}
              alt={'przelewy24'}
              loading="lazy"
            />
            <img src={'/blik_icon.svg'} width={40} alt={'przelewy24'} loading="lazy" />
          </FlexEvenlyWrapper>
        </ButtonStyled>
        <FlexLink to={'/basket'} text={'Something wrong?'}>
          Back to basket
        </FlexLink>
      </SubPageWrapper>
    </SectionWrapper>
  );
};
