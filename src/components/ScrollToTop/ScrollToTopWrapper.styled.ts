import styled from '@emotion/styled';
import { colors } from 'styles';

export const ScrollToTopWrapperStyled = styled.div`
  position: fixed !important;
  bottom: 3vh;
  right: 2%;
  background: ${colors.secondary.main};
  border-radius: 50% !important;
  aspect-ratio: 1;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 !important;
  padding: 0 !important;
  transition: all 0.4s ease-in-out;

  > button {
    color: unset;
  }

  &:hover {
    background: ${colors.primary.main};

    > button {
      color: ${colors.secondary.main};
    }
  }
`;
