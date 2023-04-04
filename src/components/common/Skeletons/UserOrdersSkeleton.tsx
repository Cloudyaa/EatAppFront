import React from 'react';
import { Skeleton, Stack } from '@mui/material';

export const UserOrdersSkeleton = () => {
  return (
    <Stack spacing={1} sx={{ width: 'min(80vw, 600px)' }}>
      <Skeleton variant="rounded" height={40} sx={{ maxWidth: 600 }} />
      <Skeleton variant="rounded" height={150} sx={{ maxWidth: 600 }} />
    </Stack>
  );
};
