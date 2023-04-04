import React, { useEffect, useState } from 'react';
import { ProductCard } from 'components';
import { apiUrl } from 'config';
import { useProductSkeletons } from 'hooks';
import { AppDispatch, RootState } from 'store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from 'features/product';
import { selectProductQty } from 'features/basket';
import { BestsellersGridStyled } from './BestsellersGrid.styled';

export const BestsellersProductsContainer = () => {
  const dispatch: AppDispatch = useDispatch();
  const bestsellers = useSelector((state: RootState) => state.products.products);
  const [showSkeletons, setShowSkeletons] = useState<boolean>(false);

  const getProductQty = useSelector(selectProductQty);

  const { skeletons } = useProductSkeletons('md', 3);

  useEffect(() => {
    dispatch(fetchProducts(`${apiUrl}/products/bestsellers`));
    if (bestsellers === null) {
      setShowSkeletons(true);
    } else setShowSkeletons(false);
  }, [dispatch]);

  return (
    <BestsellersGridStyled showSkeletons={showSkeletons}>
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
