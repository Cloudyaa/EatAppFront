import React from 'react';
import { DiscountBtnWrapperStyled } from './styled';
import { BrowseProductsBtn } from 'components';
import { useViewport } from 'hooks';

export const DiscountBarButton = () => {
  const { viewportWidth, breakpointDesktop } = useViewport();
  const isSmall = viewportWidth <= breakpointDesktop;

  return (
    <DiscountBtnWrapperStyled>
      <BrowseProductsBtn medium small={isSmall} />
    </DiscountBtnWrapperStyled>
  );
};
