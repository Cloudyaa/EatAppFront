import styled from '@emotion/styled';
import { HashLink } from 'react-router-hash-link';

export const HashLinkStyled = styled(HashLink)`
  text-decoration: none;
  font-size: max(1rem, 3cqi);
  color: var(--color-primary);
  transition: color 0.6s ease;
  &:is(:visited, :focus) {
    color: var(--color-primary);
  }
  &:hover {
    color: var(--color-secondary);
  }
`;
