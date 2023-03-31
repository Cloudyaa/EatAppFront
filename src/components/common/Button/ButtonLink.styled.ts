import { NavLink } from 'react-router-dom';
import { ButtonStyled } from './Button.styled';
import styled from '@emotion/styled';

export const ButtonLinkStyled = styled(ButtonStyled.withComponent(NavLink))`
  padding-inline: 20px;
`;
