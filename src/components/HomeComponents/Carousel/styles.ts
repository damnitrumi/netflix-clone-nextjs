import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 110px;

    .mySwiper{
      overflow: visible;
      /* transform: translateX(0.8%); */

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
