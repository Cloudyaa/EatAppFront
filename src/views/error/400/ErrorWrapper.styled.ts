import styled from '@emotion/styled';

export const ErrorWrapperStyled = styled.div`
  width: 100dvw;
  min-height: 100vh;
  height: auto;
  margin-inline: auto;
  background: url('/img/bg-1.png') 0 -100px;
  background-size: 100% auto;
  position: relative;

  @media (max-width: 990px) {
    background: url('/img/bg-tablet.png') 0 0;
    background-size: 100% auto;
  }

  @media (max-width: 800px) {
    background: url('/img/bg-mobile.png');
    background-size: 100% auto;
  }
`;
