import { createTheme } from '@mui/material/styles';
import { typography } from './typography';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#32515b',
    },
    secondary: {
      main: '#ffa101',
    },
  },
  typography,
});
