import { Meta, Story } from "@storybook/react/types-6-0";
import { YouMayAlsoLikeModal, YouMayAlsoLikeModalProps } from ".";

export default {
  title: "YouMayAlsoLikeModal",
  component: YouMayAlsoLikeModal,
  args: {
    id: 315162,
    title: "Puss in Boots: The Last Wish",
    posterHorizontal:
      "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    voteAverage: 9.789,
  },
} as Meta<YouMayAlsoLikeModalProps>;

export const Template: Story<YouMayAlsoLikeModalProps> = (args) => {
  return (
    <div>
      <YouMayAlsoLikeModal {...args} />
    </div>
  );
};
