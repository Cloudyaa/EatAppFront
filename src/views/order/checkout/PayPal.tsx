import React, { useEffect, useState } from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { apiUrl } from 'config';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { OrderDTO, SuccessOrderResponse } from 'types';
import { useFetchData } from 'hooks';
import { PaymentProps } from 'views';

const initialPaypalOptions = {
  clientId: 'test',
  'enable-funding': 'paylater',
  'disable-funding': 'venmo,card',
  'data-sdk-integration-source': 'integrationbuilder_sc',
  currency: 'GBP',
};

export const PayPal = ({ userOrder }: PaymentProps) => {
  const [cookies] = useCookies();
  const navigate = useNavigate();
  const fetchData = useFetchData();

  const [orderNumber, setOrderNumber] = useState<number | null>(null);
  const [paymentCompleted, setPaymentCompleted] = useState<boolean>(false);

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
  );
};
