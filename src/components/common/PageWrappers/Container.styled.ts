import styled from '@emotion/styled';

interface ContainerStyledProps {
  fullWidth?: boolean;
}

export const ContainerStyled = styled.div`
  --container-height: auto;

  width: ${({ fullWidth }: ContainerStyledProps) =>
    fullWidth !== undefined ? '100dvw' : 'min(100% - 3rem, 80rem)'};
  height: auto;
  min-height: 100%;
  max-height: fit-content;
  margin-inline: auto;
`;
