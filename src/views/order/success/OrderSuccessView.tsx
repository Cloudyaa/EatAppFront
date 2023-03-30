import React from 'react';
import {
  BrowseProductsBtn,
  SectionHeader,
  SectionWrapper,
  SubPageWrapper,
  TimerHomeRedirect,
} from 'components';
import { Typography } from '@mui/material';

export const OrderSuccessView = () => {
  return (
    <SectionWrapper>
      <SectionHeader>Thanks!</SectionHeader>
      <SubPageWrapper>
        <h3> Your order is confirmed.</h3>
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
