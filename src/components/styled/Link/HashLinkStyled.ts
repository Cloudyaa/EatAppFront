import styled from '@emotion/styled';
import { HashLink } from 'react-router-hash-link';

type StyledButtonProps = {
  color?: 'light' | 'dark';
  size?: 'inherit';
};

export const HashLinkStyled = styled(HashLink)`
  text-decoration: none;
  font-size: ${({ size }: StyledButtonProps) =>
    size === 'inherit' ? 'inherit' : 'max(1rem, 3cqi)'};
  color: ${({ color }: StyledButtonProps) =>
    color === 'light' ? 'var(--color-secondary)' : 'var(--color-primary)'};
  transition: color 0.6s ease;
  &:is(:visited, :focus) {
    color: ${({ color }: StyledButtonProps) =>
      color === 'light' ? 'var(--color-secondary)' : 'var(--color-primary)'};
  }
  &:hover {
    color: ${({ color }: StyledButtonProps) =>
      color === 'light' ? 'var(--color-primary)' : 'var(--color-secondary)'};
  }
`;
