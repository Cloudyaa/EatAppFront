import React from 'react';
import { IconButton } from '@mui/material';
import { Close, Menu } from '@mui/icons-material';

interface Props {
  isOpen: boolean;
  handleShow: () => void;
}

export const HandleNavIcon = ({ isOpen, handleShow }: Props) => (
  <IconButton sx={{ display: { md: 'none', xs: 'block' } }} onClick={handleShow}>
    {isOpen ? <Close /> : <Menu />}
  </IconButton>
);
