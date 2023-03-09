import React from 'react';
import { NavToolbar } from '../NavToolbar';

interface Props {
  children: React.ReactNode;
}

export const DesktopToolbar = ({ children }: Props) => (
  <NavToolbar position="static">{children}</NavToolbar>
);
