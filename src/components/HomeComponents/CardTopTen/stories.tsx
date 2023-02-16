import { Meta, Story } from "@storybook/react/types-6-0";
import { CardTopTen, CardTopTenProps } from ".";

export default {
  title: "CardTopTen",
  component: CardTopTen,
  args: {
    id: 315162,
    title: "Puss in Boots: The Last Wish",
    poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
    posterHorizontal: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    videoUrl: "RqrXhwS33yc",
    voteAverage: 1.589,
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    similar: [
      {
        id: 315162,
        title: "Puss in Boots: The Last Wish",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
      },
      {
        id: 315163,
        title: "Puss in Boots: The Last Wish",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
      },
      {
        id: 315164,
        title: "Puss in Boots: The Last Wish",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
      },
      {
        id: 315165,
        title: "Puss in Boots: The Last Wish",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
      },
      {
        id: 315166,
        title: "Puss in Boots: The Last Wish",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
      },
      {
        id: 315167,
        title: "Puss in Boots: The Last Wish",
        posterHorizontal:
          "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        voteAverage: 9.789,
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
      },
    ],
    svg: (
      <svg
        id="rank-1"
        width="100%"
        height="100%"
        viewBox="-20 0 70 154"
        className="svg-icon svg-icon-rank-1 top-10-rank"
      >
        <path
          stroke="#595959"
          strokeWidth="4"
          d="M35.377 152H72V2.538L2 19.362v30.341l33.377-8.459V152z"
        />
      </svg>
    ),
  },
} as Meta<CardTopTenProps>;

export const Template: Story<CardTopTenProps> = (args) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "237px",
        margin: "0 auto",
      }}
    >
      <CardTopTen {...args} />
    </div>
  );
};
