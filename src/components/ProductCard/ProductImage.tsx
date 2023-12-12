import React from 'react';
import { CardPartWrapperStyled, ProductImageStyled } from './styles';

interface Props {
  productName: string;
  size?: 'small' | 'medium' | 'large' | 'xl';
}

export const ProductImage = ({ productName, size }: Props) => {
  return (
    <CardPartWrapperStyled gridArea="img">
      <ProductImageStyled src={`/img/products/${productName}.jpg`} alt={productName} size={size} />
    </CardPartWrapperStyled>
  );
};
