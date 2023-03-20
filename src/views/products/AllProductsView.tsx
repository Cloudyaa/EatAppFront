import React, { useEffect } from 'react';
import { ProductCardMedium, SectionHeader, SectionWrapper, SpaceFix } from 'components';
import { apiUrl } from '../../config';
import { useSkeletons } from '../../hooks/useSkeletons';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchProducts } from '../../features/product/product.slice';

export const AllProductsView = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);

  const { skeletons } = useSkeletons('md', 3);

  useEffect(() => {
    dispatch(fetchProducts(`${apiUrl}/products/search`));
  }, [dispatch]);

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
