import React from 'react';
import { ButtonLinkStyled } from 'components';

interface Props {
  small?: boolean;
  medium?: boolean;
}

export const BrowseProductsBtn = ({ small, medium }: Props) => (
  <ButtonLinkStyled size={small ? 'small' : medium ? 'medium' : 'large'} to="/products/search">
    Browse products
  </ButtonLinkStyled>
);
