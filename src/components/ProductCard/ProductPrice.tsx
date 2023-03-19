import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const ProductPrice = ({ children }: Props) => (
  <div className="bestsellers__card-price txt-muted">{children}/kg</div>
);

