import React from 'react';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from 'store';
import { clearBasket } from 'features/basket';
import { apiUrl } from 'config';
import { useDiscount } from 'hooks';
import { OrderDTO, OrderedProductEntity } from 'types';
import { ButtonStyled, SectionHeader, SectionWrapper, SubPageWrapper } from 'components';
import { CheckoutTable } from './CheckoutTable';

export const OrderCheckoutView = () => {
  const basket = useSelector((state: RootState) => state.basket);
  const { totalAtCheckout } = useDiscount();

  const [cookies] = useCookies();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
        dispatch(clearBasket());
        navigate(`/user/${cookies.userId}/order/success`);
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
      </SubPageWrapper>
    </SectionWrapper>
  );
};
