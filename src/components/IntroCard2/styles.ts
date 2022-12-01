import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${() => css`
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    gap: 20px;
    margin: 0 auto;
  `}
`;

export const HeadingsContainer = styled.div`
  max-width: 52%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 4px;
  padding-left: 25px;
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  margin-left: -4.6%;
  margin-top: -2.2%;
  flex-basis: 555px;
  position: relative;
  img{
    position: relative;
    z-index: 2;
  }
`;

export const VideoContainer = styled.div`
  height: 100%;
  width: 100%;
  max-height: 70%;
  max-width: 61%;
  position: absolute;
  top: 34%;
  left: 49.4%;
  transform: translate(-50%,-50%);
  z-index: 1;

  video{
    width: 100%;
    height: 100%;
  }
`;
