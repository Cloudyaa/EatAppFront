import React from 'react';
import { SectionId } from 'frontTypes';
import { SpaceFix } from '../SpaceFix';
import { ContainerStyled } from './Container.styled';

interface Props {
  classes?: string;
  id?: SectionId;
  children: React.ReactNode;
}

export const SectionWrapper = ({ classes, id, children }: Props) => (
  <section id={id} className={classes}>
    <SpaceFix />
    <ContainerStyled>{children}</ContainerStyled>
  </section>
);
