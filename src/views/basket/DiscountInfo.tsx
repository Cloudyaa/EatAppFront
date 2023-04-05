import React from 'react';
import { Chip } from '@mui/material';
import { colors } from 'styles';

export const DiscountInfo = () => (
  <Chip
    label={'If you are eligible for discount, it will be applied on the next step'}
    sx={{ color: colors.dark.light, marginBlock: 2 }}
  ></Chip>
);

