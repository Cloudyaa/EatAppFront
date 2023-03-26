import styled from '@emotion/styled';

export const ContainerStyled = styled.div`
  --container-width: min(100% - 3rem, 80rem);
  --container-height: auto;

  width: var(--container-width);
  min-height: 100%;
  max-height: fit-content;
  margin-inline: auto;
`;
