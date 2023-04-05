import styled from '@emotion/styled';

export const DiscountContentWrapperStyled = styled.div`
  grid-area: content;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 420px) {
    margin-left: -1.5rem;
  }
`;
