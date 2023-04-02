import React from 'react';
import { AllProductsView, SearchResultsView, SingleProductView } from 'views';
import { getRoutes } from './getRoutes';

export const ProductsRoutes = () => {
  const routes = [
    {
      path: '/search',
      element: <AllProductsView />,
    },
    {
      path: '/search/:search_query',
      element: <SearchResultsView />,
    },
    {
      path: '/:product_id',
      element: <SingleProductView />,
    },
  ];

  return getRoutes('/products', routes);
};
