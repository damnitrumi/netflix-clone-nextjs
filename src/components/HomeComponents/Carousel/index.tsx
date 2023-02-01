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

export type CarouselProps = {
  dataArray: MoviesComplete[] | TvShowsComplete[];
};

export const Carousel = ({ dataArray }: CarouselProps) => {
  return (
    <Styled.Wrapper>
      <Swiper
        slidesPerView={6}
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
      >
        {dataArray.map((el, i) => {
          return (
            <SwiperSlide key={i}>
              <Card {...el} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Styled.Wrapper>
  );
};
