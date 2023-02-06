import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;

    > div{
      height: 733px;
      position: relative;
    }
    img{
      height: 100%;
      width: 100%;
    }

    @media ${theme.media.ltaLarge}{
      > div {
        height: 713px;
      }
    }

    @media ${theme.media.ltaBig}{
      > div {
        height: 636px;
      }
    }

    @media ${theme.media.ltaMedium}{
      > div {
        height: 613px;
      }
    }

    @media (max-width: 709px){
      > div {
        height: 668px;
      }
    }

    @media (max-width: 626px){
      > div {
        height: 697px;
      }
    }

    @media ${theme.media.ltaSmall}{
      > div {
        height: 548px;
      }
    }

    @media ${theme.media.ltaTiny}{
      > div {
        height: 481px;
      }
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
