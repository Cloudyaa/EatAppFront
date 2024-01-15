import React from 'react';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';
import { apiUrl } from 'config';
import { ButtonStyled, SectionHeader, SectionWrapper, SubPageWrapper } from 'components';

export const OrderPaymentView = () => {
  const { order_id } = useParams();
  const [cookies] = useCookies();

  const handlePayment = async (event: any) => {
    event.preventDefault();

    try {
      const res = await fetch(`${apiUrl}/user/${cookies.userId}/order/payment/${order_id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookies.token}`,
        },
      });

      if (res.ok) {
        const data: PaymentResponse = await res.json();

        console.log(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SectionWrapper classes="order__checkout">
      <SectionHeader>Payment</SectionHeader>
      <SubPageWrapper>
        <ButtonStyled onClick={handlePayment}>Pay for order</ButtonStyled>
      </SubPageWrapper>
    </SectionWrapper>
  );
};
