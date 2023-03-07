import React from 'react';
import { Dialog } from '@mui/material';
import { Logo } from '../../../Logo/Logo';
import { SpaceFix } from '../../SpaceFix';
import { NavActions, NavLinks } from '../../NavbarParts';
import { HandleNavIcon } from './HandleNavIcon';
import { MobileToolbar } from './MobileToolbar';

interface Props {
  mobileOpen: boolean;
  handleClick: () => void;
}

export const MobileOpen = ({ mobileOpen, handleClick }: Props) => {
  return (
    <Dialog
      open={mobileOpen}
      fullScreen
      fullWidth
      PaperProps={{
        style: {
          backgroundColor: 'var(--nav-background)',
        },
      }}
    >
      <MobileToolbar position="static">
        <Logo />
        <HandleNavIcon handleClick={handleClick} mobileOpen={mobileOpen} />
      </MobileToolbar>

      {/* nav body */}
      <SpaceFix />
      <NavActions />
      <hr />
      <NavLinks />
    </Dialog>
  );
};
