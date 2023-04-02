import React from 'react';
import { Typography } from '@mui/material';
import { colors } from 'styles';
import { FatFontStyled } from 'components';
import { pricier } from 'utils';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export const DeliveryInfo = () => {
  const basket = useSelector((state: RootState) => state.basket);
  const toSpend = basket.totalValue < 50 ? 50 - basket.totalValue : 0;

  return (
    <>
      {toSpend > 0 && (
        <Typography
          sx={{
            fontSize: '1.1rem',
            color: colors.primary.light,
            marginBottom: 2,
          }}
        >
          Spend&nbsp;
          <FatFontStyled as="span" color="light">
            {pricier.format(toSpend)}
          </FatFontStyled>
          &nbsp;more to get free delivery!
        </Typography>
      )}
    </>
  );
};
