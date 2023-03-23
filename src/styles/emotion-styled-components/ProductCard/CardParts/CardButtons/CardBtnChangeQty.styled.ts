import styled from '@emotion/styled';
import { ButtonGroupProps, ButtonStyled } from 'emotion-styled-components';

export const CardBtnChangeQtyStyled = styled(ButtonStyled)`
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
