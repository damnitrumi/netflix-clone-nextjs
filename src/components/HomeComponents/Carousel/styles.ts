import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${() => css`


    margin-top: 110px;

    .mySwiper{
      overflow: visible;

      .swiper-pagination{
        bottom: initial;
        left: initial;
        top: -30px;
        right: 0;
        width: 100px;
        z-index: 0;
        visibility: hidden;
      }

      .swiper-pagination-bullet{
        border-radius: initial;
        height: 2px;
        background-color: rgba( 255, 255, 255, 0.6);
      }

      &:hover .swiper-pagination, &:hover .swiper-button-prev, &:hover .swiper-button-next{
        visibility: visible;
      }

      .swiper-button-prev, .swiper-button-next{
        color: white;
        visibility: hidden;
      }

      .swiper-slide:nth-child(6n+1){
        > div > div {
          left: 0;
          transform: translateX(0);
        }
      }

      .swiper-slide:nth-child(6n){
        > div > div {
          left: initial;
          transform: translateX(0);
          right: 0;
        }
      }
    }
  `}
`;