import styled from '@emotion/styled';

export const AboutCardWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem 1rem;
  }

  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 3rem;
  }
`;
