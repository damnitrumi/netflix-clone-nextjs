import { Meta, Story } from "@storybook/react/types-6-0";
import { Card } from ".";

export default {
  title: "Card",
  component: Card,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <Card {...args} />
    </div>
  );
};
