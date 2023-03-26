import styled from '@emotion/styled';

export const HeroSideLogoStyled = styled.div`
  grid-area: side;
  container-type: inline-size;
  position: relative;

  & > * {
    position: relative;
    top: 50%;
    rotate: 90deg;
    flex-grow: 1;
    flex-shrink: 0;
  }

  @media (max-width: 832px) {
    grid-area: head;
    & > div {
      rotate: unset;
      justify-content: flex-end;
      top: 60%;
      left: -10%;
      & > p {
        text-align: right;
      }
    }
  }
`;
