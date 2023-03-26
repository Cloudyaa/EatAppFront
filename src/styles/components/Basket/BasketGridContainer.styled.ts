import styled from '@emotion/styled';

export const BasketGridContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: auto;
  gap: 3rem 0;
  width: clamp(310px, 90%, 800px);

  & > * {
    width: 100%;
  }

  @media (max-width: 800px) {
    gap: 2rem 0;
    width: clamp(200px, 90%, 450px);
  }
  @media (max-width: 470px) {
    gap: 1.6rem 0;
  }
`;
