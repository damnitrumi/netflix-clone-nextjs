import { Meta, Story } from "@storybook/react/types-6-0";
import { ModalOpened, ModalOpenedProps } from ".";

export default {
  title: "ModalOpened",
  component: ModalOpened,
  args: {
    title: "Puss in Boots: The Last Wish",

    posterHorizontal:
      "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    videoUrl: "http://www.youtube.com/embed/RqrXhwS33yc?autoplay=1&mute=1&fs=0",
    score: "98% relevante",
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
  },
} as Meta<ModalOpenedProps>;

export const Template: Story<ModalOpenedProps> = (args) => {
  return (
    <div>
      <ModalOpened {...args} />
    </div>
  );
};
