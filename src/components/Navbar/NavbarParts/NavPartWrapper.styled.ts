import styled from '@emotion/styled';

export const NavPartWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  container-type: inline-size;

  & > * {
    flex-grow: 1;
    flex-wrap: nowrap;
    width: fit-content;
    margin: 1rem 0;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }
`;
