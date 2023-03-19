import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const ProductTitle = ({ children }: Props) => (
  <div className="bestsellers__card-title">{children}</div>
);

