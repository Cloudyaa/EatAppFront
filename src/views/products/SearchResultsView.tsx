import React, { useEffect } from 'react';
import { AppDispatch, RootState } from 'store';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductQty } from 'features/basket';
import { useProductSkeletons } from 'hooks';
import { fetchProducts } from 'features/product';
import { apiUrl } from 'config';
import {
  AutoGridContainerStyled,
  ProductCard,
  SectionHeader,
  SectionWrapper,
  SpaceFix,
} from 'components';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { colors } from 'styles';
import { NotFoundSearch } from '../error';

export const HeaderLightStyled = styled.span`
  font-weight: 500;
  color: ${colors.primary.light};
`;

export const SearchResultsView = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);

  const getProductQty = useSelector(selectProductQty);

  const { search_query } = useParams();
  const { skeletons } = useProductSkeletons('md', 3);

  useEffect(() => {
    dispatch(fetchProducts(`${apiUrl}/products/search/${search_query}`));
  }, [dispatch, search_query]);

  if (status === 'failed') {
    return <NotFoundSearch />;
  }

  return (
    <SectionWrapper classes="products__search-results">
      <SectionHeader>
        Search results for: <HeaderLightStyled>&quot;{search_query}&quot;</HeaderLightStyled>{' '}
      </SectionHeader>
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
