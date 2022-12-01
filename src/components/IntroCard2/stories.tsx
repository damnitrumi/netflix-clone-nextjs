import { Meta, Story } from "@storybook/react/types-6-0";
import { IntroCard2 } from ".";

export default {
  title: "IntroCard2",
  component: IntroCard2,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <IntroCard2 {...args} />
    </div>
  );
};
