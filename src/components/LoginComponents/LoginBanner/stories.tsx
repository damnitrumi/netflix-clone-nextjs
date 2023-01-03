import { Meta, Story } from "@storybook/react/types-6-0";
import { LoginBanner } from ".";

export default {
  title: "LoginBanner",
  component: LoginBanner,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <LoginBanner {...args} />
    </div>
  );
};
