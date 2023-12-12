import styled from '@emotion/styled';
import {
  descriptionWrapperStyles,
  imageWrapperStyles,
  nameWrapperStyles,
  priceWrapperStyles,
} from './partsWrapper.styles';

type ProductCardProps = {
  gridArea: 'img' | 'name' | 'price' | 'desc';
  size?: 'small' | 'medium' | 'large' | 'xl';
};

export const CardPartWrapperStyled = styled.div<ProductCardProps>`
  ${({ gridArea, size }: ProductCardProps) =>
    gridArea === 'img'
      ? imageWrapperStyles()
      : gridArea === 'name'
      ? nameWrapperStyles(size)
      : gridArea === 'price'
      ? priceWrapperStyles(size)
      : gridArea === 'desc'
      ? descriptionWrapperStyles()
      : null}
`;
