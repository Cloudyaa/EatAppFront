import styled from "@emotion/styled";
import {colors} from "../../theme/colors";


export const HeroDescriptionWrapperStyled = styled.div `
  grid-area: desc;
  container-type: inline-size;
  font-size: max(0.6rem, 2cqi);
  padding-left: 0.3rem;
  & > p {
    --main-text-color: ${colors.dark.light};
    text-align: right;
  }

  @media (max-width: 832px) {
    font-size: max(0.5rem, 4cqi);
    padding-left: 1.2rem;
    & > p {
      text-align: left;
    }
  }
`
