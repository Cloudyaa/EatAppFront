import React from 'react';
import { ButtonLinkStyled, SubPageWrapper } from 'components';
import { useParams } from 'react-router-dom';
import { ADMIN_ROUTES } from '../../../routes';
import { ROUTES } from '../../../routes/getRoutes';

export const ManageButtons = () => {
  const { admin_id } = useParams();
  return (
    <SubPageWrapper>
      <ButtonLinkStyled to={`${ROUTES.ADMIN}/${admin_id}/manage/users`}>
        Manage users
      </ButtonLinkStyled>
      <ButtonLinkStyled to={`${ROUTES.ADMIN}/${admin_id}/manage/orders`}>
        Manage orders
      </ButtonLinkStyled>
      <ButtonLinkStyled to={`${ROUTES.ADMIN}/${admin_id}${ADMIN_ROUTES.MANAGE_PRODUCTS}`}>
        Manage products
      </ButtonLinkStyled>
    </SubPageWrapper>
  );
};
