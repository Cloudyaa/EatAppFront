import React from 'react';
import { SectionHeader, SectionWrapper, SubPageWrapper } from 'components';

export const AdminDashboard = () => {
  return (
    <SectionWrapper classes="user__dashboard">
      <SectionHeader>Admin dashboard</SectionHeader>
      <SubPageWrapper>
        <p>Admin</p>
      </SubPageWrapper>
    </SectionWrapper>
  );
};
