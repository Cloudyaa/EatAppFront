import React from 'react';
import { Typography } from '@mui/material';
import { FlexLinkWrapper, HashLinkStyled } from 'components';

interface Props {
  text: string;
  to: string;
  children: React.ReactNode;
}

export const FlexLink = ({ text, to, children }: Props) => {
  return (
    <FlexLinkWrapper>
      <Typography variant="body2">{text}</Typography>
      <HashLinkStyled color="light" size={'inherit'} to={to}>
        {children}
      </HashLinkStyled>
    </FlexLinkWrapper>
  );
};
