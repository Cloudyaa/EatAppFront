import React from 'react';
import { SectionHeader, SectionWrapper } from 'components';
import { SectionId } from 'frontTypes';
import { LoginForm } from '../../components/Forms';
import { Box } from '@mui/material';

export const LoginPage = () => {
  return (
    <SectionWrapper id={SectionId.about} classes="accounts__login">
      <SectionHeader>Welcome back!</SectionHeader>
      <Box sx={{ width: '35ch', margin: '0 auto' }}>
        <LoginForm />
      </Box>
    </SectionWrapper>
  );
};
