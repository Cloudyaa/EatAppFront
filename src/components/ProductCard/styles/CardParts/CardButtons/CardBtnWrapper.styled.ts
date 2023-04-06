import styled from '@emotion/styled';
export interface ButtonGroupProps {
  hasChangeQty?: boolean;
  hasAdd?: boolean;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

export const CardBtnWrapperStyled = styled.div<ButtonGroupProps>`
  grid-area: btns;
  justify-self: end;
  align-self: end;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.8rem;
  min-width: 100%;
  max-width: 100%;

  & > * {
    font-size: ${({ size }: ButtonGroupProps) => (size === 'small' ? '1rem' : 'inherit')};
  }

  @media (min-width: 800px) {
    ${({ hasChangeQty }: ButtonGroupProps) =>
      hasChangeQty && 'justify-content : space-between ; gap :0 ;'}
    ${({ hasAdd }: ButtonGroupProps) => hasAdd && 'justify-content : end ;'}
  }
`;
