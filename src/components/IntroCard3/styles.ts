import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${() => css`
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin: 0 auto;
  `}
`;

export const HeadingsContainer = styled.div`
  max-width: 52%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-right: 20px;
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  flex-basis: 1140px;
  position: relative;
  img{
    position: relative;
    z-index: 2;
  }
`;

// export const VideoContainer = styled.div`
//   height: 100%;
//   width: 100%;
//   max-height: 70%;
//   max-width: 72.6%;
//   position: absolute;
//   top: 48%;
//   left: 49.6%;
//   transform: translate(-50%,-50%);
//   z-index: 1;

//   video{
//     width: 100%;
//     height: 100%;
//   }
// `;
