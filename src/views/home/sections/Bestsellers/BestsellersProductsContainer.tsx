import React, { useEffect } from 'react';
import { ProductCardMedium } from 'components';
import { apiUrl } from '../../../../config';
import { useSkeletons } from '../../../../hooks/useSkeletons';
import { AppDispatch, RootState } from '../../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../../features/product/product.slice';

export const BestsellersProductsContainer = () => {
  const dispatch: AppDispatch = useDispatch();
  const bestsellers = useSelector((state: RootState) => state.products.products);

  const { skeletons } = useSkeletons('md', 3);

  useEffect(() => {
    dispatch(fetchProducts(`${apiUrl}/products/bestsellers`));
  }, [dispatch]);

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
