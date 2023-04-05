import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { colors } from 'styles';

interface Props {
  color?: 'light';
}

export const FatFontStyled = styled(Typography)`
  font-weight: 900;
  font-size: max(1.4rem, 2cqi);
  padding-bottom: 1.3rem;
  color: ${({ color }: Props) => (color === 'light' ? colors.secondary.main : 'inherit')};
`;
