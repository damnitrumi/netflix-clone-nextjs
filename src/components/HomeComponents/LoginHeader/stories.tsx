import { Meta, Story } from "@storybook/react/types-6-0";
import { HomeHeader } from ".";

export default {
  title: "HomeHeader",
  component: HomeHeader,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <HomeHeader {...args} />
    </div>
  );
};
