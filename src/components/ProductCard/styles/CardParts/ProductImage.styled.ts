import styled from '@emotion/styled';

interface ProductImageStyledProps {
  size?: 'small' | 'medium' | 'large';
}

export const ProductImageStyled = styled.img<ProductImageStyledProps>`
  border-radius: 10px;
  width: 100%;
  object-fit: cover;

  max-height: ${({ size }: ProductImageStyledProps) =>
    size === 'small'
      ? '140px'
      : size === 'medium'
      ? '280px'
      : size === 'large'
      ? '420px'
      : 'unset'};

  min-height: ${({ size }: ProductImageStyledProps) => (size === 'small' ? '100%' : 'unset')};
`;
