import React from 'react';
import { Box, Skeleton, Stack } from '@mui/material';

export const SkeletonMedium = () => {
  return (
    <Stack spacing={1} sx={{ maxWidth: 350 }}>
      <Skeleton variant="rounded" height={230} sx={{ maxWidth: 350 }} />
      <Skeleton variant="rounded" height={40} sx={{ maxWidth: 350 }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: 350 }}>
        <Skeleton variant="rounded" width={100} height={40} />
        <Skeleton variant="rounded" width={100} height={40} />
      </Box>
    </Stack>
  );
};
