import React from 'react';
import { OutsideLinkStyled } from './OutsideLink.styled';

interface Props {
  to: string;
}

export const OutsideLinkShort = ({ to }: Props) => {
  return (
    <OutsideLinkStyled size={'inherit'} to={`https://www.${to}.com/`} target="_blank">
      {to}
    </OutsideLinkStyled>
  );
};
