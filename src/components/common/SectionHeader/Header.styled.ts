import styled from '@emotion/styled';
import {colors} from 'styles';


export const HeaderStyled = styled.h2`
  --section-header-font: 'dejanire-headline', serif;
  --section-header-font-weight: 700;
  --section-header-font-style: italic;
  --section-header-font-size: max(2.3rem, 5cqi);
  --section-header-color: ${colors.primary.main};

  @media (max-width: 832px) {
    font-size: max(2rem, 4cqi);
  }

  font-family: var(--section-header-font);
  font-weight: var(--section-header-font-weight);
  font-style: var(--section-header-font-style);
  font-size: var(--section-header-font-size);
  color: var(--section-header-color);

  text-align: center;
  padding-bottom: 2rem;
`;
