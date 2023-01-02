import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    gap: 20px;
    margin: 0 auto;

    @media ${theme.media.ltaBig}{
      flex-direction: column;
      gap: 0;
    }
  `}
`;

export const HeadingsContainer = styled.div`
  ${({ theme }) => css`
    max-width: 52%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 4px;
    padding-left: 25px;

    @media ${theme.media.ltaBig}{
      max-width: 100%;
      text-align: center;
      position: relative;
      z-index: 3;
      padding-left: 0;

      h1{
        font-size: 4.0rem;
      }
      h2{
        font-size: 2.0rem;
      }
    }

    @media ${theme.media.ltaSmall}{
      h1{
        font-size: 2.6rem;
      }
      h2{
        font-size: 1.75rem;
      }
    }

  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    margin-left: -6.8%;
    margin-top: -3.6%;
    flex-basis: 500px;
    position: relative;
    img{
      position: relative;
      z-index: 2;
    }

    @media ${theme.media.ltaBig}{
      margin-left:0;
      flex-basis: auto;
      max-width: 600px;
    }

  `}
`;

export const DownloadContainer = styled.div`
  ${({ theme }) => css`
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
    width: 100%;
    max-width: 66.3%;

    background-color: black;

    .image-snippet{
      max-width: 57px;
    }

    .image-snippet:first-of-type{
      margin-right: 15px;
    }

    @media ${theme.media.ltaBig}{
      max-width: 64.5%;

      .image-snippet{
        max-width: 45px;
      }

      .image-snippet:last-of-type{
        margin-left: auto;
      }
    }

    @media ${theme.media.ltaSmall}{
      max-width: 65%;

      .image-snippet{
        max-width: 34px;
      }

    }

    @media ${theme.media.ltaTiny}{
      bottom: 6%;
      max-width: 82%;
      left: 10%;
    }


  `}
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

    @media ${theme.media.ltaSmall}{
      p:first-child{
        font-size: 1.44rem;
      }
      p:last-child{
        font-size: 1.2rem;
      }
    }

    @media ${theme.media.ltaTiny}{
      max-width: 60%;
    }


  `}
`;
