import React from 'react';
import { CardBtnAddStyled, CardBtnWrapperStyled } from '../styles';

interface Props {
  add: () => void;
  size?: 'small' | 'medium' | 'large';
}

export const AddToBasketBtn = ({ add }: Props) => {
  return (
    <CardBtnWrapperStyled hasAdd>
      <CardBtnAddStyled type="button" onClick={add}>
        Add
      </CardBtnAddStyled>
    </CardBtnWrapperStyled>
  );
};
