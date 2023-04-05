import React from 'react';
import { SectionId } from 'frontTypes';
import { SpaceFix } from '../SpaceFix';
import { ContainerStyled } from './Container.styled';

interface Props {
  classes?: string;
  id?: SectionId;
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const SectionWrapper = ({ classes, id, children, fullWidth }: Props) => (
  <section id={id} className={classes}>
    <SpaceFix />
    <ContainerStyled fullWidth={fullWidth}>{children}</ContainerStyled>
  </section>
);
