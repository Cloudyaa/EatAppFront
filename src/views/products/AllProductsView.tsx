import React, { useEffect, useState } from 'react';
import { ProductCardMedium, SectionHeader, SectionWrapper, SpaceFix } from 'components';
import { apiUrl } from '../../config';
import { SimpleProductEntity } from 'types';
import { useSkeletons } from '../../hooks/useSkeletons';

export const AllProductsView = () => {
  const [products, setProducts] = useState<SimpleProductEntity[] | null>(null);

  const { skeletons } = useSkeletons('md', 3);

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
