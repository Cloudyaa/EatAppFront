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

  @media (max-width: 860px) {
    gap: 0.4rem;
  }

  @media (max-width: 600px) {
    position: ${({ size }: ButtonGroupProps) => size === 'small' && 'absolute'};
    left: ${({ size }: ButtonGroupProps) => size === 'small' && '-13dvw'};
  }
`;
