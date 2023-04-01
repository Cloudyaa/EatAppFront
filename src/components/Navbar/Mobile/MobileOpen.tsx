import React from 'react';
import { Dialog, Divider } from '@mui/material';
import { NavActions, NavLinks } from '../NavbarParts';
import { MobileToolbar } from './MobileToolbar';
import { Transition } from '../Transition';
import { colors } from 'styles';

interface Props {
  isOpen: boolean;
  handleShow: () => void;
}

export const MobileOpen = ({ isOpen, handleShow }: Props) => (
  <Dialog
    open={isOpen}
    fullScreen
    fullWidth
    hideBackdrop
    TransitionComponent={Transition}
    onClose={Transition}
    PaperProps={{
      style: {
        backgroundColor: colors.light.main,
      },
    }}
  >
    <MobileToolbar handleShow={handleShow} isOpen={isOpen} />
    {/* nav body start*/}
    <NavActions handleShow={handleShow} />
    <Divider />
    <NavLinks handleShow={handleShow} />
    {/*   nav body end */}
  </Dialog>
);
