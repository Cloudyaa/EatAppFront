import { css } from '@emotion/react';

export const GlobalStyles = css`
  --container-height: auto;

  * {
    margin: 0;
  }

  body,
  html {
    background-color: var(--main-background);
    scroll-behavior: smooth;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: arboria, 'sans-serif';
    font-weight: 400;
    font-style: normal;
    font-size: 1.25rem;
    color: var(--color-primary);
  }

  section,
  footer {
    height: var(--container-height);
    min-height: var(--container-height);
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
  }
  //
  //.form-wrapper {
  //  .MuiOutlinedInput-root fieldset {
  //    border: 2px solid var(--color-primary) !important;
  //    font-family: var(--main-text-font) !important;
  //  }
  //
  //  .MuiOutlinedInput-root:is(:focus, :focus-within, :focus-visible) fieldset {
  //    border: 2px solid var(--color-secondary) !important;
  //  }
  //}
`;
