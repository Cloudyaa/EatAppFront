import styled from '@emotion/styled';

export const HeroHeaderWrapperStyled = styled.div`
  grid-area: head;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  @media (max-width: 832px) {
    grid-area: head;
    justify-content: center;
    align-items: center;
  }
`;
