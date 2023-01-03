import { Meta, Story } from "@storybook/react/types-6-0";
import { LoginArea } from ".";

export default {
  title: "LoginArea",
  component: LoginArea,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <LoginArea {...args} />
    </div>
  );
};
