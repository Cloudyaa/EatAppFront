import React from 'react';
import { Dialog } from '@mui/material';
import { NavActions, NavLinks } from '../NavbarParts';
import { MobileToolbar } from './MobileToolbar';
import { Transition } from '../Transition';

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
        backgroundColor: 'var(--nav-background)',
      },
    }}
  >
    <MobileToolbar handleShow={handleShow} isOpen={isOpen} />
    {/* nav body start*/}
    <NavActions handleShow={handleShow} />
    <hr />
    <NavLinks handleShow={handleShow} />
    {/*   nav body end */}
  </Dialog>
);
