import { Meta, Story } from "@storybook/react/types-6-0";
import { IntroBanner } from ".";

export default {
  title: "IntroBanner",
  component: IntroBanner,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <IntroBanner {...args} />
    </div>
  );
};
