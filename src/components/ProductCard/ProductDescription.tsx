import React from 'react';
import { CardPartWrapperStyled } from './styles';

interface Props {
  description: string;
}

export const ProductDescription = ({ description }: Props) => {
  return <CardPartWrapperStyled gridArea="desc">{description}</CardPartWrapperStyled>;
};
