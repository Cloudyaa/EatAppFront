import React from 'react';
import { MobileToolbar } from './MobileToolbar';
import { Logo } from '../../../Logo/Logo';
import { HandleNavIcon } from './HandleNavIcon';

interface Props {
  mobileOpen: boolean;
  handleClick: () => void;
}

export const MobileClosed = ({ mobileOpen, handleClick }: Props) => {
  return (
    <MobileToolbar position="fixed">
      <Logo />
      <HandleNavIcon handleClick={handleClick} mobileOpen={mobileOpen} />
    </MobileToolbar>
  );
};
