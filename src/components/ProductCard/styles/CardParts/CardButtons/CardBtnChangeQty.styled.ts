import styled from '@emotion/styled';
import { ButtonStyled } from 'components';
import { ButtonGroupProps } from './CardBtnWrapper.styled';
import { colors } from 'styles';

export const CardBtnChangeQtyStyled = styled(ButtonStyled)`
  cursor: ${({ disabled }: ButtonGroupProps) => (disabled ? 'not-allowed' : 'pointer')};
  --btn-background: ${({ disabled }: ButtonGroupProps) =>
    disabled ? colors.dark.light : colors.secondary.main};

  @media (max-width: 900px) {
    --btn-font-size: max(1rem, 1cqi);
    padding: 2px 4px;

    @media (max-width: 420px) {
      border-radius: ${({ size }: ButtonGroupProps) => size === 'small' && '4px'};
      & > * {
        width: ${({ size }: ButtonGroupProps) => size === 'small' && '0.9rem'};
        height: ${({ size }: ButtonGroupProps) => size === 'small' && '0.9rem'};
      }
    }
  }
`;
