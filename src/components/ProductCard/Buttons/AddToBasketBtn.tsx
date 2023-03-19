import React from 'react';
import { ButtonCustom } from 'components';

export const AddToBasketBtn = () => {
  return (
    <div className="product-card__button-group has-add">
      <ButtonCustom classes="product-card__button-add" onClick={() => console.log('added')}>
        Add
      </ButtonCustom>
    </div>
  );
};
