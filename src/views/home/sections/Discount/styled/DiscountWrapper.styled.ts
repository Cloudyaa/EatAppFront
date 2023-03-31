import styled from '@emotion/styled';
import { ContainerStyled } from 'components';

export const DiscountWrapperStyled = styled(ContainerStyled)`
  display: grid;
  grid-template-areas:
    'img content'
    'img btn';
  grid-auto-columns: 0.9fr 1.1fr;
  align-content: center;
  justify-content: center;

  margin-top: -2rem;

  > * {
    min-width: 100%;
    min-height: 100%;
  }

  @media (max-width: 800px) {
    margin-top: -3rem;
    grid-template-areas:
      'img content'
      'btn btn';
    grid-auto-columns: 1fr 1fr;
  }
`;
