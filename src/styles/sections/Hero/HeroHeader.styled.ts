import styled from '@emotion/styled';
import { HeaderStyled } from '../../components/typography/Header.styled';

export const HeroHeaderStyled = styled(HeaderStyled)`
  padding-bottom: 0;
  @media (max-width: 832px) {
    padding-top: 0.5rem;
    font-size: max(1rem, 11cqi);
  }
`;
