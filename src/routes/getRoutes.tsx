import React from 'react';
import { Route } from 'react-router-dom';

interface RouteEntity {
  path: string;
  element: React.ReactNode;
}

export enum ROUTES {
  DASHBOARD = '/dashboard',
  ADMIN = '/admin',
}

export const getRoutes = (routeBase: string, routes: RouteEntity[]) =>
  routes.map(({ path, element }, index) => (
    <Route path={`${routeBase}${path}`} element={element} key={index} />
  ));
