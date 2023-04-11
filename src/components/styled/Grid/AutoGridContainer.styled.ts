import styled from '@emotion/styled';

type AutoGridContainerProps = {
  size?: 'small' | 'medium' | 'large';
};

export const AutoGridContainerStyled = styled.div<AutoGridContainerProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6rem 1rem;
  justify-items: center;
  & > * {
    width: 100%;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem 1rem;
  }
  @media (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    gap: 3rem 0;
  }
`;
