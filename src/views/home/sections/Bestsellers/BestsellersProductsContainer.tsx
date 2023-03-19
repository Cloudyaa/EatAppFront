import React, { useEffect, useState } from 'react';
import { ProductCardMedium } from 'components';
import { apiUrl } from '../../../../config';
import { SimpleProductEntity } from 'types';
import { useSkeletons } from '../../../../hooks/useSkeletons';

export const BestsellersProductsContainer = () => {
  const [bestsellers, setBestsellers] = useState<SimpleProductEntity[] | null>(null);

  const { skeletons } = useSkeletons('md');

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
