import React from 'react';
import { ButtonCustom } from 'components';

export const AddToBasketBtn = () => {
  return (
    <div className="bestsellers__card-button-group has-add">
      <ButtonCustom classes="bestsellers__card-button-add" onClick={() => console.log('added')}>
        Add
      </ButtonCustom>
    </div>
  );
};
