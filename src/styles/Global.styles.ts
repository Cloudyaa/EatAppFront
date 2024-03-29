import { css } from '@emotion/react';
import { colors } from './theme';

export const GlobalStyles = css`
  --container-height: auto;

  * {
    margin: 0;
  }

  body,
  html {
    background-color: ${colors.light.main};
    scroll-behavior: smooth;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: arboria, 'sans-serif';
    font-weight: 400;
    font-style: normal;
    font-size: 1.25rem;
    color: ${colors.primary.main};
  }

  main {
    height: calc(100% - 4.5rem);
  }

  h3 {
    font-size: max(1.3rem, 2.7cqi);
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;
