import React from 'react';
import { CardPartWrapperStyled } from 'emotion-styled-components';

interface Props {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

export const ProductPrice = ({ children, size }: Props) => (
  <CardPartWrapperStyled size={size} gridArea="price">
    {children}/kg
  </CardPartWrapperStyled>
);
