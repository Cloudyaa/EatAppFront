import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const ProductPrice = ({ children }: Props) => (
  <div className="product-card__price txt-muted">{children}/kg</div>
);
