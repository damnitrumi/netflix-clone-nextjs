import * as Styled from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Card } from "../Card";
import { MoviesComplete } from "utils/map-movies-similar";
import { TvShowsComplete } from "utils/map-tv-shows-similar";
import { Heading } from "components/Heading";

export type CarouselProps = {
  title: string;
  dataArray: MoviesComplete[] | TvShowsComplete[];
};

export const Carousel = ({ title, dataArray }: CarouselProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="2.2rem">{title}</Heading>
      <Styled.Container>
        <Swiper
          slidesPerView="auto"
          spaceBetween={3}
          slidesPerGroup={6}
          loop={true}
          loopFillGroupWithBlank={false}
          pagination={{
            clickable: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            1400: {
              slidesPerView: 6,
              slidesPerGroup: 6,
            },
            1100: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
            800: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            500: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
        >
          {dataArray.map((el, i) => {
            return (
              <SwiperSlide key={i}>
                <Card {...el} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
