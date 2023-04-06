import React from 'react';
import { CircularProgress } from '@mui/material';
import { SubPageWrapper } from '../PageWrappers';

export const Loader = () => {
  return (
    <SubPageWrapper addSx={{ height: 'calc(100dvh - 8rem)' }}>
      <CircularProgress color="secondary" size={100} />
    </SubPageWrapper>
  );
};
