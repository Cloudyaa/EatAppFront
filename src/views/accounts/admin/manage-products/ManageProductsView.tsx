import { ButtonLinkStyled, SectionHeader, SectionWrapper, SubPageWrapper } from 'components';
import React from 'react';
import { ROUTES } from '../../../../routes/getRoutes';
import { ADMIN_ROUTES } from '../../../../routes';
import { useParams } from 'react-router-dom';

export const ManageProductsView = () => {
  const { admin_id } = useParams();
  return (
    <SectionWrapper>
      <SectionHeader>Manage products</SectionHeader>
      <SubPageWrapper>
        <ButtonLinkStyled
          to={`${ROUTES.ADMIN}/${admin_id}${ADMIN_ROUTES.MANAGE_PRODUCTS}${ADMIN_ROUTES.NEW_PRODUCT}`}
        >
          Add new product
        </ButtonLinkStyled>
      </SubPageWrapper>
    </SectionWrapper>
  );
};
