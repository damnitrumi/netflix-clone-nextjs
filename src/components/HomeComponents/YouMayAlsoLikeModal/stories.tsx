import { Meta, Story } from "@storybook/react/types-6-0";
import { YouMayAlsoLikeModal, YouMayAlsoLikeModalProps } from ".";

export default {
  title: "YouMayAlsoLikeModal",
  component: YouMayAlsoLikeModal,
  args: {
    posterHorizontal:
      "https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
  },
} as Meta<YouMayAlsoLikeModalProps>;

export const Template: Story<YouMayAlsoLikeModalProps> = (args) => {
  return (
    <div>
      <YouMayAlsoLikeModal {...args} />
    </div>
  );
};
