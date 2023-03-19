import React from 'react';
import { ButtonCustom } from 'components';
import { AddRounded, RemoveRounded } from '@mui/icons-material';

export const ChangeQtyBtns = () => {
  return (
    <div className="bestsellers__card-button-group has-change-qty">
      <ButtonCustom
        classes="bestsellers__card-button-change-qty"
        onClick={() => console.log('added')}
      >
        <AddRounded />
      </ButtonCustom>
      <span>3</span>
      <ButtonCustom
        classes="bestsellers__card-button-change-qty"
        onClick={() => console.log('added')}
      >
        <RemoveRounded />
      </ButtonCustom>
    </div>
  );
};
