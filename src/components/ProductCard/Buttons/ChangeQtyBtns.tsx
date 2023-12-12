import React from 'react';
import { AddRounded, RemoveRounded } from '@mui/icons-material';
import { CardBtnChangeQtyStyled, CardBtnWrapperStyled } from '../styles';
import { Tooltip } from '@mui/material';

interface Props {
  add: () => void;
  remove: () => void;
  qty: number;
  size?: 'small' | 'medium' | 'large' | 'xl';
}

export const ChangeQtyBtns = ({ add, remove, qty, size }: Props) => {
  return (
    <CardBtnWrapperStyled hasChangeQty size={size}>
      <CardBtnChangeQtyStyled size={size} type="button" onClick={remove} disabled={false}>
        <Tooltip title="Remove">
          <RemoveRounded />
        </Tooltip>
      </CardBtnChangeQtyStyled>
      <span>{Math.min(qty, 20)}&nbsp;kg</span>
      <CardBtnChangeQtyStyled size={size} type="button" onClick={add} disabled={qty >= 20}>
        <Tooltip title={qty >= 20 ? 'You have reach max of this product' : 'Add'}>
          <AddRounded />
        </Tooltip>
      </CardBtnChangeQtyStyled>
    </CardBtnWrapperStyled>
  );
};
