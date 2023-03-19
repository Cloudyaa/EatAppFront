import React from 'react';
import { ButtonLink, SectionHeader, SectionWrapper } from 'components';
import { Box } from '@mui/material';

export const SuccessSignupPage = () => {
  return (
    <SectionWrapper>
      <SectionHeader>Success!</SectionHeader>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <h3>Your account has been created successfully</h3>
        <p>You can now log into your account</p>
        <ButtonLink to={'/account/login'} size="sm" color="light">
          Go to login page
        </ButtonLink>
      </Box>
    </SectionWrapper>
  );
};
