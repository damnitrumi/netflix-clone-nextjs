import { Meta, Story } from "@storybook/react/types-6-0";
import { Login } from ".";

export default {
  title: "Login",
  component: Login,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <Login {...args} />
    </div>
  );
};
