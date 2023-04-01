import styled from '@emotion/styled';

export const ContactWrapperStyled = styled.div`
  display: grid;
  grid-template-areas:
    'sendMessage form'
    'findUs form';
  grid-template-columns: 0.8fr 1.2fr;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-areas:
      'sendMessage'
      'form'
      'findUs';
    grid-template-columns: 1fr;
  }
`;
