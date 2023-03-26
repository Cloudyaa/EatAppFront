import styled from '@emotion/styled';
import {colors} from 'styles';

export const ToolbarStyled = styled.div`
  display: grid !important;
  grid-auto-flow: column;
  grid-auto-columns: 1fr 4.1rem 1fr;
  background: ${colors.light.main} !important;
  margin-inline: 1rem;

  @media (max-width: 800px) {
      display: flex;
      justify-content: space-between;
    
  }


`;
