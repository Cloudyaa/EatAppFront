import React from 'react';
import {LogoStyled} from "styles";

interface Props {
  size?: 'small' | 'medium' | 'large' | undefined;
}

export const Logo = ({ size }: Props) => {

  return (
      <LogoStyled size={size}>
        <p>eat.</p>
      </LogoStyled>
  );
};
