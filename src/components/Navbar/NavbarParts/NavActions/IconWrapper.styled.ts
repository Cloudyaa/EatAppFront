import styled from '@emotion/styled';

export const IconWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0;
  gap: 0.5rem;
  @media (max-width: 800px) {
    font-size: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
`
