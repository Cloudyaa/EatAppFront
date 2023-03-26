import styled from '@emotion/styled';
import { AutoGridContainerStyled } from '../../../../components/styled/Grid/AutoGridContainer.styled';

interface Props {
  showSkeletons?: boolean;
}

export const BestsellersGridStyled = styled(AutoGridContainerStyled)`
  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    //  width: fit-content;
    width: ${({ showSkeletons }: Props) => (showSkeletons ? '100%' : 'fit-content')};
    margin: auto;
  }

  @media (min-width: 420px) and (max-width: 800px) {
    justify-items: center;
  }
`;
