import styled from '@emotion/styled';
import { CSSProperties } from '@mui/material/styles/createMixins';
import { colors } from 'styles';

type StyledButtonProps = {
  size?: 'small' | 'medium' | 'large' | 'xl';
  color?: 'light' | 'dark';
  sx?: CSSProperties;
};

export const ButtonStyled = styled.button`
  --btn-font-family: 'arboria', sans-serif;
  --btn-font-color: ${colors.light.main};
  --btn-background: ${({ color }: StyledButtonProps) =>
    color === 'dark' ? colors.primary.main : colors.secondary.main};
  --btn-font-size: ${({ size }: StyledButtonProps) =>
    size === 'small' ? '1rem' : size === 'xl' ? 'max(1.6rem, 2cqi)' : 'max(1.3rem, 2cqi);'};
  --btn-border: none;
  --btn-radius: 10px;
  --btn-padding: ${({ size }: StyledButtonProps) =>
    size === 'small' ? '4px 10px' : size === 'xl' ? '14px 30px' : '8px 20px'};

  @media (max-width: 768px) {
    --btn-font-size: ${({ size }: StyledButtonProps) =>
      size === 'small' ? '0.8rem' : size === 'xl' ? 'max(1.3rem, 2cqi)' : 'max(1rem, 2cqi);'};
    --btn-padding: ${({ size }: StyledButtonProps) => (size === 'xl' ? '10px 20px' : '6px 12px')};
  }

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
`;
