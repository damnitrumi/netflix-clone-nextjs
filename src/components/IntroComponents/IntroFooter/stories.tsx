import { Meta, Story } from "@storybook/react/types-6-0";
import { IntroFooter } from ".";

export default {
  title: "IntroFooter",
  component: IntroFooter,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <IntroFooter {...args} />
    </div>
  );
};
