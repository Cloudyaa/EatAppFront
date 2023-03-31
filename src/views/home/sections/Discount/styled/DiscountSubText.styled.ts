import styled from '@emotion/styled';
import { colors } from 'styles';

interface Props {
  small?: boolean;
}

export const DiscountSubTextStyled = styled.p`
  font-size: ${({ small }: Props) => (small ? 'max(0.6rem, 1.7cqi)' : 'max(1rem, 3cqi)')};
  color: ${({ small }: Props) => (small ? colors.dark.light : 'inherit')};
  container-type: inline-size;
  padding: 0.5rem;
`;
