import styled from '@emotion/styled';
import { ContainerStyled } from 'components';

export const FooterWrapperStyled = styled(ContainerStyled)`
  text-align: left;
  margin-inline: unset;
  max-width: 100%;
  position: relative;
  margin-top: 2rem;

  > *:not(div:first-of-type) {
    padding-inline: 2rem;
  }

  div:first-of-type {
    display: unset;
    position: relative;
    left: 2rem;
  }

  @media (max-width: 500px) {
    margin-top: 0;
  }
`;
