import { useTheme } from '@mui/material';

export const useColor = () => {
  const { palette } = useTheme();

  const dangerColor = palette.error.main;

  return { dangerColor };
};
