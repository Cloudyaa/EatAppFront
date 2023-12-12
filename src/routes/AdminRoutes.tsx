import React from 'react';
import { getRoutes, ROUTES } from './getRoutes';
import { AdminDashboard, ManageProductsView, NewProductForm } from 'views';

export enum ADMIN_ROUTES {
  MANAGE_PRODUCTS = '/manage/products',
  NEW_PRODUCT = '/new',
  UPLOAD_IMAGE = '/upload',
}

export const AdminRoutes = () => {
  const routes = [
    {
      path: ROUTES.DASHBOARD,
      element: <AdminDashboard />,
    },
    {
      path: ADMIN_ROUTES.MANAGE_PRODUCTS,
      element: <ManageProductsView />,
    },
    {
      path: `${ADMIN_ROUTES.MANAGE_PRODUCTS}${ADMIN_ROUTES.NEW_PRODUCT}`,
      element: <NewProductForm />,
    },
  ];

  return getRoutes(`${ROUTES.ADMIN}/:admin_id`, routes);
};
