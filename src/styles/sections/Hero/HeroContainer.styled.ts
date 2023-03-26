import styled from '@emotion/styled';
import { ContainerStyled } from 'styles';

export const HeroContainerStyled = styled(ContainerStyled)`
  display: grid;
  grid-template-areas:
    'head head '
    'desc img'
    'btm btm';
  grid-template-columns: 0.4fr 0.6fr;
  grid-template-rows: 0.4fr 1fr 0.4fr;
  grid-auto-flow: column;
  justify-content: center;
`;
