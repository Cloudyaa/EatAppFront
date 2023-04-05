import { css } from '@emotion/react';
import { colors } from 'styles';

export const imageWrapperStyles = () => css`
  grid-area: img;
`;

export const nameWrapperStyles = (size?: 'small' | 'medium' | 'large') => css`
  grid-area: name;
  padding: 0 0 5px 5px;
  font-size: ${size === 'small' ? 'max(1.5rem, 2cqi)' : 'inherit'};

  @media (max-width: 800px) {
    font-size: ${size === 'small' ? 'max(1.3rem, 1cqi)' : 'inherit'};
  }

  @media (max-width: 420px) {
    font-size: ${size === 'small' ? 'max(1.1rem, 1cqi)' : 'inherit'};
  }
`;

export const priceWrapperStyles = (size?: 'small' | 'medium' | 'large') => css`
  color: ${colors.dark.light};
  grid-area: price;
  align-self: end;
  justify-self: start;
  padding: 0 0 5px 5px;
  @media (max-width: 800px) {
    font-size: ${size === 'small' ? 'max(1.1rem, 1cqi)' : 'inherit'};
  }
  @media (max-width: 420px) {
    font-size: ${size === 'small' ? 'max(0.9rem, 1cqi)' : 'inherit'};
  }
`;
