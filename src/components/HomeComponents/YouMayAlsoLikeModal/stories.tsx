import { Meta, Story } from "@storybook/react/types-6-0";
import { YouMayAlsoLikeModal, YouMayAlsoLikeModalProps } from ".";

export default {
  title: "YouMayAlsoLikeModal",
  component: YouMayAlsoLikeModal,
  args: {
    id: 315162,
    posterHorizontal:
      "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    score: "98% relevante",
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
  },
} as Meta<YouMayAlsoLikeModalProps>;

export const Template: Story<YouMayAlsoLikeModalProps> = (args) => {
  return (
    <div>
      <YouMayAlsoLikeModal {...args} />
    </div>
  );
};
