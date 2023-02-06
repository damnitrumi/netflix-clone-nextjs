import { Meta, Story } from "@storybook/react/types-6-0";
import { IntroCard1 } from ".";

export default {
  title: "IntroCard1",
  component: IntroCard1,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <IntroCard1 {...args} />
    </div>
  );
};
