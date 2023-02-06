import { Meta, Story } from "@storybook/react/types-6-0";
import { IntroCard5 } from ".";

export default {
  title: "IntroCard5",
  component: IntroCard5,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <IntroCard5 {...args} />
    </div>
  );
};
