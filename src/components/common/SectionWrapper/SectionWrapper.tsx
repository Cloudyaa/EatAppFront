import React from 'react';
import { Box } from '@mui/material';
import { SectionId } from 'frontTypes';

interface Props {
  classes: string;
  id: SectionId;
  children: React.ReactNode;
}

export const SectionWrapper = ({ classes, id, children }: Props) => (
  <section id={id} className={classes}>
    <Box className="container">{children}</Box>
  </section>
);

