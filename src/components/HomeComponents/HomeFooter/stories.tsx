import { Meta, Story } from "@storybook/react/types-6-0";
import { HomeFooter } from ".";

export default {
  title: "HomeFooter",
  component: HomeFooter,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <HomeFooter {...args} />
    </div>
  );
};
