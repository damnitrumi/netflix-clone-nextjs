import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${() => css`
    max-width: 1100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  `}
`;

export const HeadingsContainer = styled.div`
`;

export const ImageContainer = styled.div`
  flex-basis: 1080px;
`;
