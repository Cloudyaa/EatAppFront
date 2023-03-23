import React from 'react';
import { CardPartWrapperStyled, ProductImageStyled } from 'emotion-styled-components';

interface Props {
  productName: string;
  size?: 'small' | 'medium' | 'large';
}

export const ProductImage = ({ productName, size }: Props) => {
  return (
    <CardPartWrapperStyled gridArea="img">
      <ProductImageStyled src={`/img/products/${productName}.jpg`} alt={productName} size={size} />
    </CardPartWrapperStyled>
  );
};
