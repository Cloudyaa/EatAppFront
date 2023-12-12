import { css } from '@emotion/react';
import { colors } from 'styles';

export const imageWrapperStyles = () => css`
  grid-area: img;
`;

export const descriptionWrapperStyles = () => css`
  grid-area: desc;
  font-size: max(1rem, 1cqi);
  align-self: center;
  padding: 0 0 5px 35px;
`;

export const nameWrapperStyles = (size?: 'small' | 'medium' | 'large' | 'xl') => css`
  grid-area: name;
  padding: ${size === 'xl' ? '0 0 5px 35px' : '0 0 5px 5px'};
  font-size: ${size === 'small'
    ? 'max(1.5rem, 2cqi)'
    : size === 'xl'
    ? 'max(3rem, 3cqi)'
    : 'inherit'};

  @media (max-width: 800px) {
    font-size: ${size === 'small' ? 'max(1.3rem, 1cqi)' : 'inherit'};
  }

  @media (max-width: 420px) {
    font-size: ${size === 'small' ? 'max(1.1rem, 1cqi)' : 'inherit'};
  }
`;

export const priceWrapperStyles = (size?: 'small' | 'medium' | 'large' | 'xl') => css`
  color: ${colors.dark.light};
  grid-area: price;
  align-self: end;
  justify-self: start;
  padding: ${size === 'xl' ? '0 0 5px 35px' : '0 0 5px 5px'};
  @media (max-width: 800px) {
    font-size: ${size === 'small' ? 'max(1.1rem, 1cqi)' : 'inherit'};
  }
  @media (max-width: 420px) {
    font-size: ${size === 'small' ? 'max(0.9rem, 1cqi)' : 'inherit'};
  }
`;
