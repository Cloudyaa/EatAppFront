import React from 'react';
import { OutsideLinkStyled } from 'components';

interface Props {
  to: string;
  children: React.ReactNode;
}

export const OutsideLink = ({ to, children }: Props) => {
  return (
    <OutsideLinkStyled size={'inherit'} to={to} target="_blank">
      {children}
    </OutsideLinkStyled>
  );
};
