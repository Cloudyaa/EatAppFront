import React, { useEffect } from 'react';
import { ProductCard } from 'components';
import { apiUrl } from 'config';
import { useSkeletons } from 'hooks';
import { AppDispatch, RootState } from 'store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from 'features/product';
import { selectProductQty } from 'features/basket';
import { BestsellersGridStyled } from 'emotion-styled-components';

export const BestsellersProductsContainer = () => {
  const dispatch: AppDispatch = useDispatch();
  const bestsellers = useSelector((state: RootState) => state.products.products);

  const getProductQty = useSelector(selectProductQty);

  const { skeletons } = useSkeletons('md', 3);

  useEffect(() => {
    dispatch(fetchProducts(`${apiUrl}/products/bestsellers`));
  }, [dispatch]);

  return (
    <BestsellersGridStyled>
      {bestsellers === null ? (
        skeletons
      ) : (
        <>
          {bestsellers.map((one) => (
            <ProductCard product={one} key={one.productId} qty={getProductQty(one.productId)} />
          ))}
        </>
      )}
    </BestsellersGridStyled>
  );
};
