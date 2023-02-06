import { Meta, Story } from "@storybook/react/types-6-0";
import { LoginPage } from ".";

export default {
  title: "LoginPage",
  component: LoginPage,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <LoginPage {...args} />
    </div>
  );
};
