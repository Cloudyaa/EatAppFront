import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const ProductTitle = ({ children }: Props) => (
  <div className="product-card__title">{children}</div>
);
