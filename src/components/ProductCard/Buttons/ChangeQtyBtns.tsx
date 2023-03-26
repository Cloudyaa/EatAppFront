import React from 'react';
import { AddRounded, RemoveRounded } from '@mui/icons-material';
import { CardBtnChangeQtyStyled, CardBtnWrapperStyled } from '../styles';

interface Props {
  add: () => void;
  remove: () => void;
  qty: number;
  size?: 'small' | 'medium' | 'large';
}

export const ChangeQtyBtns = ({ add, remove, qty, size }: Props) => {
  return (
    <CardBtnWrapperStyled hasChangeQty size={size}>
      <CardBtnChangeQtyStyled size={size} type="button" onClick={add}>
        <AddRounded />
      </CardBtnChangeQtyStyled>
      <span>{Math.min(qty, 20)}</span>
      <CardBtnChangeQtyStyled size={size} type="button" onClick={remove}>
        <RemoveRounded />
      </CardBtnChangeQtyStyled>
    </CardBtnWrapperStyled>
  );
};
