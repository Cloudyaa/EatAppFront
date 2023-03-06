import React from 'react';
import { Box } from '@mui/material';

interface Props {
  classes: string;
  children: React.ReactNode;
}

export const SectionWrapper = ({ classes, children }: Props) => (
  <section className={classes}>
    <Box className="container">{children}</Box>
  </section>
);

