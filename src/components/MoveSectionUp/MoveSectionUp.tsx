import React from 'react';
import { MoveUpStyled } from './MoveUp.styled';

interface Props {
  children: React.ReactNode;
}

export const MoveSectionUp = ({ children }: Props) => <MoveUpStyled>{children}</MoveUpStyled>;
