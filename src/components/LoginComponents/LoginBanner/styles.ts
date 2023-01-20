import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${() => css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;

    > div{
      height: 1098px;
      position: relative;
    }
    img{
      height: 100%;
      width: 100%;
    }

    @media (max-width: 740px){
      display: none;
    }
  `}
`;

export const Background = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  background-image: linear-gradient(0deg,rgba(0,0,0,.8) 0,rgba(0,0,0,.5) 60%,rgba(0,0,0,.8));
`;
