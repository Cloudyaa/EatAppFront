import React from 'react';

interface Props {
  productName: string;
}

export const ProductImage = ({ productName }: Props) => {
  return (
    <div className="bestsellers__card-image-wrapper">
      <img src={`/img/products/${productName}.jpg`} alt={productName} />
    </div>
  );
};
