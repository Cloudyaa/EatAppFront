import styled from '@emotion/styled';
import { imageWrapperStyles, nameWrapperStyles, priceWrapperStyles } from './partsWrapper.styles';

type ProductCardProps = {
  gridArea: 'img' | 'name' | 'price';
  size?: 'small' | 'medium' | 'large';
};

export const CardPartWrapperStyled = styled.div<ProductCardProps>`
  ${({ gridArea, size }: ProductCardProps) =>
    gridArea === 'img'
      ? imageWrapperStyles()
      : gridArea === 'name'
      ? nameWrapperStyles(size)
      : gridArea === 'price'
      ? priceWrapperStyles(size)
      : null}
`;
