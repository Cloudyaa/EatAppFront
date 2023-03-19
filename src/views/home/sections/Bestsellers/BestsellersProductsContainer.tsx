import React, { useEffect, useState } from 'react';
import { ProductCardMedium, SkeletonMedium } from 'components';
import { apiUrl } from '../../../../config';
import { SimpleProductEntity } from 'types';

export const BestsellersProductsContainer = () => {
  const [bestsellers, setBestsellers] = useState<SimpleProductEntity[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${apiUrl}/products/bestsellers`);
        const data: SimpleProductEntity[] = await res.json();
        setBestsellers(data);
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
    <div className="auto-grid-container bestsellers__cards-container">
      {bestsellers === null ? (
        skeletons
      ) : (
        <>
          {bestsellers.map((one) => (
            <ProductCardMedium name={one.name} price={one.price} key={one.productId} />
          ))}
        </>
      )}
    </div>
  );
};
