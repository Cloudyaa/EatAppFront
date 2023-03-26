import React from 'react';
import { CardPartWrapperStyled } from './styles';
import { Typography } from '@mui/material';
import { colors } from 'styles';

interface Props {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

export const ProductPrice = ({ children, size }: Props) => (
  <CardPartWrapperStyled size={size} gridArea="price">
    <Typography sx={{ color: colors.dark.light }}>{children}/kg</Typography>
  </CardPartWrapperStyled>
);
