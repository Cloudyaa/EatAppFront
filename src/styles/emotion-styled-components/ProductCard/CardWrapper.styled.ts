import styled from '@emotion/styled';
import { css } from '@emotion/react';

type ProductCardProps = {
  size?: 'small' | 'medium' | 'large';
};

const cardClassic = () => css`
  aspect-ratio: 5/4;
  display: grid;
  grid-template-areas:
    'img img'
    'name name'
    'price btns';
  grid-template-columns: 0.8fr 1.2fr;
  grid-template-rows: 0.7fr 0.2fr 0.1fr;
  grid-auto-flow: column;

  @media (min-width: 800px) {
    grid-template-columns: 0.9fr 1.1fr;
    grid-template-rows: 0.8fr 0.1fr 0.1fr;
  }
`;

const cardSmall = () => css`
  display: grid;
  grid-template-areas:
    'img name name'
    'img price btns';
  grid-template-columns: 0.4fr 0.6fr 1fr;
  grid-template-rows: 0.4fr 0.6fr;
  grid-auto-flow: column;

  @media (min-width: 500px) {
    grid-template-columns: 1fr 1.2fr 0.8fr;
    grid-template-rows: 0.4fr 0.6fr;
    gap: 0.8rem;
  }
`;

export const CardWrapperStyled = styled.div<ProductCardProps>`
  max-height: ${({ size }: ProductCardProps) =>
    size === 'small'
      ? '140px'
      : size === 'medium'
      ? '280px'
      : size === 'large'
      ? '420px'
      : '280px'};

  ${({ size }: ProductCardProps) => (size === 'small' ? cardSmall() : cardClassic())}
`;
