import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { colors } from 'styles';

interface Props {
  light?: boolean;
}

export const FatFontStyled = styled(Typography)`
  font-weight: 900;
  font-size: max(1.4rem, 2cqi);
  padding-block: 1.3rem;
  color: ${({ light }: Props) => (light ? colors.secondary.main : 'inherit')};
`;
