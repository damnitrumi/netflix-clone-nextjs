import { Meta, Story } from "@storybook/react/types-6-0";
import { Card, CardProps } from ".";

export default {
  title: "Card",
  component: Card,
  args: {
    id: 315162,
    title: "Puss in Boots: The Last Wish",
    posterHorizontal: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    videoUrl: "RqrXhwS33yc",
    voteAverage: 1.589,
    type: "movie",
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
  },
} as Meta<CardProps>;

export const Template: Story<CardProps> = (args) => {
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
      <Card {...args} />
    </div>
  );
};
