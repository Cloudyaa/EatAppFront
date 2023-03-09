import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

interface Props {
  size?: 'sm' | 'md' | 'lg' | undefined;
}

export const Logo = ({ size }: Props) => {
  const [logoSize, setLogoSize] = useState('sm');

  useEffect(() => {
    size !== undefined && setLogoSize(size);
  });

  return (
    <Box className="logo">
      <p className={`logo__${logoSize}`}>eat.</p>
    </Box>
  );
};
