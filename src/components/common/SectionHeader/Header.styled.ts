import styled from '@emotion/styled';
import {colors} from 'styles';

type StyledHeaderProps = {
  color?: 'light' | 'dark';
};

export const HeaderStyled = styled.h2`
  font-family: 'dejanire-headline', serif;
  font-weight: 700;
  font-style: italic;
  font-size: ${({color}: StyledHeaderProps) => color === 'light' ? 'max(1.5em, 5cqi)' : 'max(2.3rem, 5cqi)'};
  color: ${({color}: StyledHeaderProps) => color === 'light' ? colors.secondary.main : colors.primary.main};

  text-align: center;
  padding-bottom: ${({color}: StyledHeaderProps) => color === 'light' ? '1rem' : '3rem'};

  @media (max-width: 800px) {
    font-size: ${({color}: StyledHeaderProps) => color === 'light' ? 'max(1.3em, 3cqi)' : 'max(2rem, 4cqi)'};
    padding-bottom: ${({color}: StyledHeaderProps) => color === 'light' ? '0.5rem' : '2rem'};
  }
`;
