import styled from '@emotion/styled';

export const HeroBottomWrapperStyled = styled.div`
  grid-area: btm;
  display: grid;
  grid-template-columns: 1fr 0.9fr;

  @media (max-width: 832px) {
    display: unset;
    text-align: center;

    > .hero-image-left {
      display: none;
    }
  }
`;
