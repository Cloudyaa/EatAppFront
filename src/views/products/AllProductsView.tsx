import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store';
import { fetchProducts } from 'features/product';
import { selectProductQty } from 'features/basket';
import { apiUrl } from 'config';
import { useSkeletons } from 'hooks';
import { ProductCard, SectionHeader, SectionWrapper, SpaceFix } from 'components';
import { AutoGridContainerStyled } from 'styles';

export const AllProductsView = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const getProductQty = useSelector(selectProductQty);

  const { skeletons } = useSkeletons('md', 3);

  useEffect(() => {
    dispatch(fetchProducts(`${apiUrl}/products/search`));
  }, [dispatch]);

  return (
    <SectionWrapper classes="products__all">
      <SectionHeader>All products</SectionHeader>
      <AutoGridContainerStyled>
        {products === null ? (
          skeletons
        ) : (
          <>
            {products.map((one) => (
              <ProductCard product={one} key={one.productId} qty={getProductQty(one.productId)} />
            ))}
          </>
        )}
      </AutoGridContainerStyled>
      <SpaceFix />
    </SectionWrapper>
  );
};
