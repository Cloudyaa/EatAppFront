import styled from '@emotion/styled';

export const BasketItemStyled = styled.div`
  display: flex;
  gap: 0.8rem;
  & > button {
    align-self: flex-start;
  }

  @media (max-width: 420px) {
    & > button > * {
      width: 0.9rem;
      height: 0.9rem;
    }
  }
`;
