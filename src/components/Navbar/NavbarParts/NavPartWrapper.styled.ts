import styled from '@emotion/styled';

export const NavPartWrapperStyled = styled.div `
  --nav-el-wrapper-direction: row;
  --nav-el-wrapper-margin: 0 0 0 2rem;
  --nav-el-wrapper-align: center;
  --nav-el-wrapper-justify: center;
  --nav-el-wrapper-gap: 2rem;

  @media (max-width: 800px) {
    --nav-el-wrapper-margin: 0;
    --nav-el-wrapper-direction: column;
    --nav-el-wrapper-gap: 2rem;
  }
  
  display: flex;
  flex-direction: var(--nav-el-wrapper-direction);
  justify-content: var(--nav-el-wrapper-justify);
  align-items: var(--nav-el-wrapper-align);
  gap: var(--nav-el-wrapper-gap);
  margin: var(--nav-el-wrapper-margin);
  container-type: inline-size;
  
  & > * {
    flex-grow: 1;
    flex-wrap: nowrap;
    width: fit-content;
    margin: 1rem 0;
  }
`
