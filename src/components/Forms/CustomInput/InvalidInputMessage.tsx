import React from 'react';
import { Box, Typography } from '@mui/material';
import { useColor } from 'hooks';

interface Props {
  children: React.ReactNode;
}

export const InvalidInputMessage = ({ children }: Props) => {
  const { dangerColor } = useColor();
  return (
    <Box
      sx={{
        mt: 0.5,
        boxSizing: 'border-box',
        borderLeft: `5px solid ${dangerColor}`,
      }}
    >
      <Typography
        sx={{
          opacity: 0.7,
          alignSelf: 'start',
          fontSize: '60%',
          marginInline: 1,
          fontFamily: 'var(--main-text-font)',
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};
