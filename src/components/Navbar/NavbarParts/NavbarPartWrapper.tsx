import React from 'react';
import { Box } from '@mui/material';

interface Props {
  children: React.ReactNode;
  classes?: string | undefined;
}

export const NavbarPartWrapper = ({ children, classes }: Props) => (
  <Box className={`navbar__element-wrapper ${classes}`}>{children}</Box>
);
