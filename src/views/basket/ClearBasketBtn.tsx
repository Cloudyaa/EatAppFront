import React from 'react';
import { ButtonStyled, SpaceFix } from 'components';
import { clearBasket } from 'features/basket';
import { useAppDispatch } from 'store';

export const ClearBasketBtn = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <ButtonStyled onClick={() => dispatch(clearBasket())} color={'dark'}>
        Clear basket
      </ButtonStyled>
      <SpaceFix />
    </>
  );
};
