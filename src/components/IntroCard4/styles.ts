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
  margin-left: -6.8%;
  margin-top: -3.6%;
  flex-basis: 500px;
  position: relative;
  img{
    position: relative;
    z-index: 2;
  }
`;

export const DownloadContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border: 2px solid hsla(0,0%,100%,.25);
  border-radius: 12px;
  box-shadow: 0 0 2em 0 #000;
  position: absolute;
  z-index: 2;
  bottom: 8%;
  left: 17%;
  background-color: black;

  .image-snippet{
    max-width: 57px;
  }

  .image-snippet:first-of-type{
    margin-right: 15px;
  }
`;

export const DownloadContainerInfo = styled.div`
  ${({ theme }) => css`
    color: white;

    p:first-child{
      font-family: Netflix-Medium
    }
    p:last-child{
      font-size: 1.4rem;
      color: ${theme.colors.netflixMainBlue};
    }
  `}
`;
