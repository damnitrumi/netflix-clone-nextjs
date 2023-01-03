import { Meta, Story } from "@storybook/react/types-6-0";
import { SubscribeIntro } from ".";

export default {
  title: "SubscribeIntro",
  component: SubscribeIntro,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Template: Story = (args) => {
  return (
    <div style={{ height: "200vh" }}>
      <SubscribeIntro {...args} />
    </div>
  );
};
