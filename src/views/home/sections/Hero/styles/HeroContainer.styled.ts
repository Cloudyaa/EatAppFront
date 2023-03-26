import styled from '@emotion/styled';
import { ContainerStyled } from 'components';

export const HeroContainerStyled = styled(ContainerStyled)`
  --container-width: 100dvw;
  display: grid;
  grid-template-areas:
    'head head side img img'
    'desc desc side img img'
    'btm btm btm img img';
  grid-template-columns: 1fr 1.4fr 0.6fr 1fr 1fr;
  grid-template-rows: 0.3fr 0.2fr 0.5fr;
  grid-auto-flow: column;

  & > * {
    min-width: 100%;
    min-height: 100%;
  }

  @media (max-width: 832px) {
    display: grid;
    grid-template-areas:
      'head head '
      'desc img'
      'btm btm';
    grid-template-columns: 0.4fr 0.6fr;
    grid-template-rows: 0.4fr 1fr 0.4fr;
    grid-auto-flow: column;
    justify-content: center;
  }
`;
