import { Meta, Story } from "@storybook/react/types-6-0";
import { IntroCard4 } from ".";

export default {
  title: "IntroCard4",
  component: IntroCard4,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <IntroCard4 {...args} />
    </div>
  );
};
