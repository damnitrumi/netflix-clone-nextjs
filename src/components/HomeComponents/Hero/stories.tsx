import { Meta, Story } from "@storybook/react/types-6-0";
import { Hero, HeroProps } from ".";

import mock from "./mock";

export default {
  title: "Hero",
  component: Hero,
  args: {
    dataArray: mock,
  },
} as Meta<HeroProps>;

export const Template: Story<HeroProps> = (args) => {
  return (
    <div>
      <Hero {...args} />
    </div>
  );
};
