import * as Styled from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Card } from "../Card";

export type CarouselProps = {
  title?: string;
};

const mock = [
  {
    id: 315162,
    title: "Puss in Boots: The Last Wish",
    posterHorizontal: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    videoUrl: "/RqrXhwS33yc",
    voteAverage: 1.589,
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    similar: [
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
    ],
  },
  {
    id: 315162,
    title: "Puss in Boots: The Last Wish",
    posterHorizontal: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    videoUrl: "/RqrXhwS33yc",
    voteAverage: 1.589,
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    similar: [
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
    ],
  },
  {
    id: 315162,
    title: "Puss in Boots: The Last Wish",
    posterHorizontal: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    videoUrl: "/RqrXhwS33yc",
    voteAverage: 1.589,
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    similar: [
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
    ],
  },
  {
    id: 315162,
    title: "Puss in Boots: The Last Wish",
    posterHorizontal: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    videoUrl: "/RqrXhwS33yc",
    voteAverage: 1.589,
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    similar: [
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
    ],
  },
  {
    id: 315162,
    title: "Puss in Boots: The Last Wish",
    posterHorizontal: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    videoUrl: "/RqrXhwS33yc",
    voteAverage: 1.589,
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    similar: [
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
    ],
  },
  {
    id: 315162,
    title: "Puss in Boots: The Last Wish",
    posterHorizontal: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    videoUrl: "/RqrXhwS33yc",
    voteAverage: 1.589,
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    similar: [
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
    ],
  },
  {
    id: 315162,
    title: "Puss in Boots: The Last Wish",
    posterHorizontal: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    videoUrl: "/RqrXhwS33yc",
    voteAverage: 1.589,
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    similar: [
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
    ],
  },
  {
    id: 315162,
    title: "Puss in Boots: The Last Wish",
    posterHorizontal: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    videoUrl: "/RqrXhwS33yc",
    voteAverage: 1.589,
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    similar: [
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
    ],
  },
  {
    id: 315162,
    title: "Puss in Boots: The Last Wish",
    posterHorizontal: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    videoUrl: "/RqrXhwS33yc",
    voteAverage: 1.589,
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    similar: [
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
    ],
  },
  {
    id: 315162,
    title: "Puss in Boots: The Last Wish",
    posterHorizontal: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    videoUrl: "/RqrXhwS33yc",
    voteAverage: 1.589,
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    similar: [
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
    ],
  },
  {
    id: 315162,
    title: "Puss in Boots: The Last Wish",
    posterHorizontal: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    videoUrl: "/RqrXhwS33yc",
    voteAverage: 1.589,
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    similar: [
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
    ],
  },
  {
    id: 315162,
    title: "Puss in Boots: The Last Wish",
    posterHorizontal: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    videoUrl: "/RqrXhwS33yc",
    voteAverage: 1.589,
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    similar: [
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
    ],
  },
  {
    id: 315162,
    title: "Puss in Boots: The Last Wish",
    posterHorizontal: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    videoUrl: "/RqrXhwS33yc",
    voteAverage: 1.589,
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    similar: [
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
    ],
  },
  {
    id: 315162,
    title: "Puss in Boots: The Last Wish",
    posterHorizontal: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    videoUrl: "/RqrXhwS33yc",
    voteAverage: 1.589,
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    similar: [
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
    ],
  },
  {
    id: 315162,
    title: "Puss in Boots: The Last Wish",
    posterHorizontal: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    videoUrl: "/RqrXhwS33yc",
    voteAverage: 1.589,
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    similar: [
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
    ],
  },
  {
    id: 315162,
    title: "Puss in Boots: The Last Wish",
    posterHorizontal: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    videoUrl: "/RqrXhwS33yc",
    voteAverage: 1.589,
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    similar: [
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
    ],
  },
  {
    id: 315162,
    title: "Puss in Boots: The Last Wish",
    posterHorizontal: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    videoUrl: "/RqrXhwS33yc",
    voteAverage: 1.589,
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    similar: [
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
    ],
  },
  {
    id: 315162,
    title: "Puss in Boots: The Last Wish",
    posterHorizontal: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    videoUrl: "/RqrXhwS33yc",
    voteAverage: 1.589,
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    similar: [
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        videoUrl: "/bEoNNYyVNxc",
      },
    ],
  },
];

export const Carousel = ({ title }: CarouselProps) => {
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
        {mock.map((el, i) => {
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
