import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

export const InvalidInputMessage = ({ children }: Props) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: 0.5,
        boxSizing: 'border-box',
        borderLeft: `5px solid ${theme.palette.error.main}`,
      }}
    >
      <Typography
        sx={{
          opacity: 0.7,
          alignSelf: 'start',
          fontSize: '60%',
          marginInline: 1,
          textAlign: 'left',
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};
