import React from 'react';
import { ButtonLinkStyled, SubPageWrapper } from 'components';
import { useParams } from 'react-router-dom';

export const ManageButtons = () => {
  const { admin_id } = useParams();
  return (
    <SubPageWrapper>
      <ButtonLinkStyled to={`/admin/${admin_id}/manage/users`}>Manage users</ButtonLinkStyled>
      <ButtonLinkStyled to={`/admin/${admin_id}/manage/orders`}>Manage orders</ButtonLinkStyled>
      <ButtonLinkStyled to={`/admin/${admin_id}/manage/products`}>Manage products</ButtonLinkStyled>
    </SubPageWrapper>
  );
};
