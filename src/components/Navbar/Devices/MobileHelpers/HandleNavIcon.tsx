import React from 'react';
import { IconButton } from '@mui/material';
import { Close, Menu } from '@mui/icons-material';

interface Props {
  mobileOpen: boolean;
  handleClick: () => void;
}

export const HandleNavIcon = ({ mobileOpen, handleClick }: Props) => {
  return (
    <IconButton sx={{ display: { md: 'none', xs: 'block' } }} onClick={handleClick}>
      {mobileOpen ? <Close /> : <Menu />}
    </IconButton>
  );
};
