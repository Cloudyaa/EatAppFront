import React, { useState } from 'react';
import { OrderDTO, StripeSessionResponse, SuccessOrderResponse } from 'types';
import { PaymentProps } from 'views';
import { loadStripe } from '@stripe/stripe-js';
import { apiUrl } from 'config';
import { useFetchData } from 'hooks';
import { useCookies } from 'react-cookie';
import { ButtonStyled, FlexEvenlyWrapper } from 'components';
import { FaCcMastercard, FaCcVisa } from 'react-icons/fa6';
import { CircularProgress } from '@mui/material';

const STRIPE_SECRET = import.meta.env.VITE_STRIPE_SECRET;
const stripePromise = loadStripe(STRIPE_SECRET);

export const Stripe = ({ userOrder }: PaymentProps) => {
  const [cookies] = useCookies();
  const fetchData = useFetchData();
  const [orderId, setOrderId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCheckout = async () => {
    try {
      setIsLoading(true);
      const data = await fetchData<SuccessOrderResponse, OrderDTO>(
        `${apiUrl}/user/${cookies.userId}/order/new`,
        'POST',
        userOrder,
      );

      if (data) {
        setOrderId(data.orderId);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleStripePayment = async () => {
    await handleCheckout();

    if (orderId) {
      try {
        const data = await fetchData<StripeSessionResponse, null>(
          `${apiUrl}/user/${cookies.userId}/order/stripe/${orderId}`,
          'GET',
        );

        if (data) {
          const stripe = await stripePromise;

          await stripe?.redirectToCheckout({
            sessionId: data.session.id,
          });
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <ButtonStyled onClick={handleStripePayment}>
      <FlexEvenlyWrapper
        addSx={{
          alignItems: 'center',
          gap: 2,
        }}
      >
        {isLoading ? (
          <CircularProgress color="primary" size={20} />
        ) : (
          <>
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
          </>
        )}
      </FlexEvenlyWrapper>
    </ButtonStyled>
  );
};
