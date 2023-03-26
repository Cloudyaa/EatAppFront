import styled from '@emotion/styled';

interface LogoStyledProps {
  size?: 'small' | 'medium' | 'large' | undefined;
}

export const LogoStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  font-size: ${({ size }: LogoStyledProps) =>
    size === 'small' ? '2rem' : size === 'medium' ? '5.7vw' : size === 'large' ? '8.2vw' : '2rem'};
  > p {
    font-family: 'dejanire-headline', serif;
    font-weight: 900;
    color: var(--color-secondary);
    text-align: center;
    width: fit-content;
  }
`;
