import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 70px 45px;
    border-bottom: ${theme.fixedMeasures.introMainBorder};
    background-color: black;


    @media ${theme.media.ltaSmall}{
      padding: 70px 26px;
    }

  `}
`;

export const Container = styled.div`
  ${() => css`
  `}
`;
