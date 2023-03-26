import styled from '@emotion/styled';
import { NavPartWrapperStyled } from '../NavPartWrapper.styled';

export const NavActionsWrapperStyled = styled(NavPartWrapperStyled)`
  container-type: inline-size;

  @media (max-width: 800px) {
    margin-bottom: 1rem;
  }
`;
