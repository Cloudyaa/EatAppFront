import { colors } from 'styles';
import { Toolbar } from '@mui/material';
import { styled } from '@mui/system';

export const ToolbarStyled = styled(Toolbar)`
  display: grid !important;
  grid-auto-flow: column;
  grid-auto-columns: 1fr 4.1rem 1fr;
  background: ${colors.light.main} !important;
  margin-inline: 1rem;

  @media (max-width: 800px) {
    display: flex;
    justify-content: space-between;
  }
`;
