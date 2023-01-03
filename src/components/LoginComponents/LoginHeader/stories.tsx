import { Meta, Story } from "@storybook/react/types-6-0";
import { LoginHeader } from ".";

export default {
  title: "LoginHeader",
  component: LoginHeader,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <LoginHeader {...args} />
    </div>
  );
};
