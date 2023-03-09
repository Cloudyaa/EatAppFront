import React from 'react';
import { MobileToolbar } from './MobileToolbar';

interface Props {
  isOpen: boolean;
  handleShow: () => void;
}

export const MobileClosed = ({ isOpen, handleShow }: Props) => (
  <MobileToolbar handleShow={handleShow} isOpen={isOpen} />
);
