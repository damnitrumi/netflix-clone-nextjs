import { Meta, Story } from "@storybook/react/types-6-0";
import { IntroHeader } from ".";

export default {
  title: "IntroHeader",
  component: IntroHeader,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <IntroHeader {...args} />
    </div>
  );
};
