import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiUrl } from 'config';
import { ROUTES } from '../../routes/getRoutes';
import { ErrorResponse, ProductEntity } from 'types';
import { Loader, ProductCard, SectionWrapper } from 'components';
import { capitalizeAndSplit } from 'utils';
import { useSelector } from 'react-redux';
import { selectProductQty } from 'features/basket';
import { Box, Typography } from '@mui/material';

export const SingleProductView = () => {
  const { product_id } = useParams();
  const getProductQty = useSelector(selectProductQty);

  const [productData, setProductData] = useState<ProductEntity | null>(null);
  const [errorResponse, setErrorResponse] = useState<ErrorResponse | null>(null);

  useEffect(() => {
    (async () => await getProductData())();
  }, []);

  const getProductData = async () => {
    try {
      const res = await fetch(`${apiUrl}${ROUTES.PRODUCTS}/${product_id}`);

      if (res.ok) {
        const data: ProductEntity = await res.json();
        setProductData(data);

        if (!data) {
          return console.log('Empty response');
        }
      } else {
        const data: ErrorResponse = await res.json();
        setErrorResponse(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const nutritionInfo = {
    fat: productData?.fat,
    energy: productData?.energy,
    fibre: productData?.fibre,
    protein: productData?.protein,
    salt: productData?.salt,
    sugars: productData?.sugars,
  };

  return productData ? (
    <Box sx={{ m: 5 }}>
      <SectionWrapper classes="single_product_view">
        <ProductCard product={productData} qty={getProductQty(product_id!)} size={'xl'} />
        <Box>
          <Typography variant={'h3'}>Nutrition info (per 100g)</Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 3,
            }}
          >
            {Object.entries(nutritionInfo).map(([key, value]) => (
              <Box sx={{ fontSize: '1.6rem' }} key={key}>
                <Typography component={'span'} sx={{ fontWeight: 'bold' }}>
                  {capitalizeAndSplit(key)}:{' '}
                </Typography>
                <Typography component={'span'}>
                  {value}
                  {key === 'energy' ? 'kcal' : 'g'}
                </Typography>
              </Box>
            ))}
          </Box>
          <Typography sx={{ mt: 2, fontSize: '0.85rem' }}>
            Product life guaranteed for <b>{productData.lifeInDays} days</b> excluding delivery day.
          </Typography>
        </Box>
      </SectionWrapper>
    </Box>
  ) : errorResponse ? (
    errorResponse
  ) : (
    <Loader />
  );
};
