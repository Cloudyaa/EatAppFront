import styled from '@emotion/styled';
import { colors } from 'styles';

export const SearchbarStyled = styled.form`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;

  > input[type='text'] {
    font-size: 0.8rem;
    border-radius: 10px;
    border: 2px solid ${colors.primary.main};
    background: none;
    height: 30px;
    min-width: 20vw;
    outline: none;
    box-sizing: border-box;
    padding-left: 0.5rem;
    transition: border-color 0.2s ease-out;

    &:is(:focus, :focus-within, :focus-visible) {
      border-color: ${colors.secondary.main};
    }

    @media (max-width: 800px) {
      align-items: center;
      margin: 0 !important;
      height: 35px;
    }
`;
