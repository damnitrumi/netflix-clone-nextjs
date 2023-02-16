import { Meta, Story } from "@storybook/react/types-6-0";
import { FrequentlyAsked } from ".";

export default {
  title: "FrequentlyAsked",
  component: FrequentlyAsked,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <FrequentlyAsked {...args} />
    </div>
  );
};
