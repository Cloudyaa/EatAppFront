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
import { FaCcMastercard, FaCcVisa } from 'react-icons/fa6';
import { Divider } from '@mui/material';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';

const STRIPE_SECRET = import.meta.env.VITE_STRIPE_SECRET;
const stripePromise = loadStripe(STRIPE_SECRET);

const initialPaypalOptions = {
  clientId: 'test',
  'enable-funding': 'paylater',
  'disable-funding': 'venmo,card',
  'data-sdk-integration-source': 'integrationbuilder_sc',
  currency: 'GBP',
};

export const OrderCheckoutView = () => {
  const basket = useSelector((state: RootState) => state.basket);
  const { totalAtCheckout } = useDiscount();
  const [cookies] = useCookies();
  const navigate = useNavigate();

  const [orderId, setOrderId] = useState<string | null>(null);
  const [orderNumber, setOrderNumber] = useState<number | null>(null);
  const [paymentCompleted, setPaymentCompleted] = useState<boolean>(false);

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

  const fetchData = async <T, D>(
    url: string,
    method: 'GET' | 'POST',
    body?: D,
  ): Promise<T | void> => {
    try {
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookies.token}`,
        },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        return (await res.json()) as T;
      }
    } catch (e) {
      console.error(e);
    }
  };

  // const handleCheckout = async () => {
  //   try {
  //     const res = await fetch(`${apiUrl}/user/${cookies.userId}/order/new`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${cookies.token}`,
  //       },
  //       body: JSON.stringify(userOrder),
  //     });
  //
  //     if (res.ok) {
  //       const data: SuccessOrderResponse = await res.json();
  //       setOrderId(data.orderId);
  //       setOrderNumber(data.orderNumber);
  //     }
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  const handleCheckout = async () => {
    try {
      const data = await fetchData<SuccessOrderResponse, OrderDTO>(
        `${apiUrl}/user/${cookies.userId}/order/new`,
        'POST',
        userOrder,
      );

      if (data) {
        setOrderId(data.orderId);
        setOrderNumber(data.orderNumber);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleStripePayment = async () => {
    await handleCheckout();

    if (orderId) {
      try {
        const data = await fetchData<StripeSessionResponse, any>(
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
      }
    }
  };

  const handleCreatePaypalOrder = async () => {
    try {
      const data = await fetchData<SuccessOrderResponse, OrderDTO>(
        `${apiUrl}/user/${cookies.userId}/order/new`,
        'POST',
        userOrder,
      );
      if (data) {
        const orderData = data.paypalResponse;
        if (orderData.id) {
          setOrderNumber(data.orderNumber);
          return orderData.id;
        }

        const errorDetail = orderData?.details?.[0];
        const errorMessage = errorDetail
          ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
          : JSON.stringify(orderData);

        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePaypalApprove = async (data: any, actions: any) => {
    try {
      const orderData = await fetchData<any, any>(
        `${apiUrl}/user/${cookies.userId}/order/paypal/${data.orderID}`,
        'POST',
      );

      if (orderData) {
        const errorDetail = orderData?.details?.[0];

        if (errorDetail?.issue === 'INSTRUMENT_DECLINED') {
          return actions.restart();
        }

        if (errorDetail) {
          throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
        }

        const transaction = orderData.purchase_units[0].payments.captures[0];

        if (transaction.status === 'COMPLETED') {
          setPaymentCompleted(true);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (paymentCompleted && orderNumber) {
      navigate(`/basket/order/success/${orderNumber}`);
    }
  }, [paymentCompleted, orderNumber]);

  return (
    <SectionWrapper classes="order__checkout">
      <SectionHeader>Checkout</SectionHeader>
      <SubPageWrapper>
        <h3>Your order summary</h3>
        <CheckoutTable />

        <PayPalScriptProvider options={initialPaypalOptions}>
          <PayPalButtons
            style={{
              shape: 'rect',
              layout: 'vertical',
            }}
            createOrder={handleCreatePaypalOrder}
            onApprove={(data, actions) => handlePaypalApprove(data, actions)}
          />
        </PayPalScriptProvider>

        <Divider>OR</Divider>

        <ButtonStyled onClick={handleStripePayment}>
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
