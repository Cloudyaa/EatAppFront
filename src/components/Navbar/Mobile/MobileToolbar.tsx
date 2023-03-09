import React from 'react';
import { NavToolbar } from '../NavToolbar';
import { HandleNavIcon } from './HandleNavIcon';
import { LogoBtn } from '../../Logo';

interface Props {
  isOpen: boolean;
  handleShow: () => void;
}

export const MobileToolbar = ({ isOpen, handleShow }: Props) => (
  <NavToolbar position="fixed" shadow>
    <LogoBtn handleShow={handleShow} isOpen={isOpen} />
    <HandleNavIcon handleShow={handleShow} isOpen={isOpen} />
  </NavToolbar>
);
