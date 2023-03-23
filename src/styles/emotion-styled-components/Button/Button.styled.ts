import styled from '@emotion/styled';

type StyledButtonProps = {
  size?: 'small' | 'medium' | 'large';
  sx?: object;
};

export const ButtonStyled = styled.button`
  --btn-font-family: 'arboria', sans-serif;
  --btn-font-color: var(--color-light);
  --btn-background: var(--color-secondary);
  --btn-font-size: ${({ size }: StyledButtonProps) =>
    size === 'small' ? '1rem' : 'max(1.3rem, 2cqi);'};
  --btn-border: none;
  --btn-radius: 10px;
  --btn-padding: ${({ size }: StyledButtonProps) => (size === 'small' ? '2px 4px' : '6px 12px')};

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
