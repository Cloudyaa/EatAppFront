import React from 'react';
import { ButtonLinkStyled } from 'components';

interface Props {
  small?: boolean;
  medium?: boolean;
}

export const BackHomeBtn = ({ small, medium }: Props) => (
  <ButtonLinkStyled size={small ? 'small' : medium ? 'medium' : 'large'} to="/">
    Back to home page
  </ButtonLinkStyled>
);
