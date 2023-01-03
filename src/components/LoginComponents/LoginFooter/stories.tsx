import { Meta, Story } from "@storybook/react/types-6-0";
import { LoginFooter } from ".";

export default {
  title: "LoginFooter",
  component: LoginFooter,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <LoginFooter {...args} />
    </div>
  );
};
