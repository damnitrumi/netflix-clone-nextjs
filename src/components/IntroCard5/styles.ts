import styled, { css } from "styled-components";
import { Title as Heading } from "../Heading/styles";

export const Wrapper = styled.div`
  ${() => css`
    max-width: 815px;
    text-align: center;
    margin: 0 auto;

    > ${Heading}{
        margin-bottom: 50px;
      }
  `}
`;
