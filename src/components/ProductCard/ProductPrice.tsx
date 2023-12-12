import React from 'react';
import { CardPartWrapperStyled } from './styles';
import { Typography } from '@mui/material';
import { colors } from 'styles';

interface Props {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'xl';
}

export const ProductPrice = ({ children, size }: Props) => (
  <CardPartWrapperStyled size={size} gridArea="price">
    <Typography
      sx={{
        color: colors.dark.light,
        fontSize: size === 'xl' ? 'max(1.5rem, 1cqi)' : 'inherit',
      }}
    >
      {children}/kg
    </Typography>
  </CardPartWrapperStyled>
);
