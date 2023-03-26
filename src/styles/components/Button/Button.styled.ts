import styled from '@emotion/styled';
import { CSSProperties } from '@mui/material/styles/createMixins';

type StyledButtonProps = {
  size?: 'small' | 'medium' | 'large';
  color?: 'light' | 'dark';
  sx?: CSSProperties;
};

export const ButtonStyled = styled.button`
  --btn-font-family: 'arboria', sans-serif;
  --btn-font-color: var(--color-light);
  --btn-background: ${({ color }: StyledButtonProps) =>
    color === 'dark' ? 'var(--color-primary)' : 'var(--color-secondary)'};
  --btn-font-size: ${({ size }: StyledButtonProps) =>
    size === 'small' ? '1rem' : size === 'large' ? '1.6 rem' : 'max(1.3rem, 2cqi);'};
  --btn-border: none;
  --btn-radius: 10px;
  --btn-padding: ${({ size }: StyledButtonProps) =>
    size === 'small' ? '4px 10px' : size === 'large' ? '14px 30px' : '6px 12px'};

  color: var(--btn-font-color);
  background-color: var(--btn-background);
  font-family: var(--btn-font-family);
  font-size: var(--btn-font-size);
  padding: var(--btn-padding);
  border: var(--btn-border);
  border-radius: var(--btn-radius);
  box-sizing: border-box;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  max-height: 100%;
  max-width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;

  //&-light {
  //  --btn-background: var(--color-secondary);
  //}
  //
  //&-dark {
  //  --btn-background: var(--color-primary);
  //}
  //
  //&-big {
  //  --btn-font-size: 1.2rem;
  //  --btn-padding: 14px 30px;
  //}
  //
  //&-xl {
  //  --btn-font-size: 1.6rem;
  //  --btn-padding: 14px 30px;
  //}
  //
  //&-small {
  //  --btn-font-size: 1rem;
  //  --btn-padding: 8px 20px;
  //}
`;
