import { Meta, Story } from "@storybook/react/types-6-0";
import { IntroCard3 } from ".";

export default {
  title: "IntroCard3",
  component: IntroCard3,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <IntroCard3 {...args} />
    </div>
  );
};
