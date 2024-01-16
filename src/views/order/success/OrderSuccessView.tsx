import React, { useEffect } from 'react';
import {
  BrowseProductsBtn,
  SectionHeader,
  SectionWrapper,
  SubPageWrapper,
  TimerHomeRedirect,
} from 'components';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { makeOrderNumber } from 'utils';
import { useAppDispatch } from 'store';
import { clearBasket } from 'features/basket';

export const OrderSuccessView = () => {
  const { order_number } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearBasket());
  }, []);

  return (
    <SectionWrapper>
      <SectionHeader>Thanks!</SectionHeader>
      <SubPageWrapper>
        <h3> Your order: {order_number && makeOrderNumber(order_number)} is confirmed.</h3>
        <Typography maxWidth={600}>
          Our team is excited to start preparing your items with care, so you can enjoy your
          favourite foods without leaving the house.
        </Typography>
        <Typography maxWidth={600}>
          In the meantime, why not check out some of our other amazing products? We&apos;ve got
          everything you need to make your meals delicious and nutritious.
        </Typography>
        <BrowseProductsBtn />
        <TimerHomeRedirect />
      </SubPageWrapper>
    </SectionWrapper>
  );
};
