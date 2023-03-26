import React from 'react';
import { CardPartWrapperStyled } from 'styles';

interface Props {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

export const ProductName = ({ children, size }: Props) => (
  <CardPartWrapperStyled size={size} gridArea="name">
    {children}
  </CardPartWrapperStyled>
);
