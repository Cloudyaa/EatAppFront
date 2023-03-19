import React, { useEffect, useState } from 'react';
import {
  ProductCardMedium,
  SectionHeader,
  SectionWrapper,
  SkeletonMedium,
  SpaceFix,
} from 'components';
import { apiUrl } from '../../config';
import { SimpleProductEntity } from 'types';

export const AllProductsView = () => {
  const [products, setProducts] = useState<SimpleProductEntity[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${apiUrl}/products/search`);
        const data: SimpleProductEntity[] = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const skeletons: JSX.Element[] = [];
  for (let i = 0; i < 3; i++) {
    skeletons.push(<SkeletonMedium />);
  }

  return (
    <SectionWrapper classes="products__all">
      <SectionHeader>All products</SectionHeader>
      <div className="auto-grid-container">
        {products === null ? (
          skeletons
        ) : (
          <>
            {products.map((one) => (
              <ProductCardMedium name={one.name} price={one.price} key={one.productId} />
            ))}
          </>
        )}
      </div>
      <SpaceFix />
    </SectionWrapper>
  );
};
