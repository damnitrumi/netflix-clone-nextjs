import { Meta, Story } from "@storybook/react/types-6-0";
import { LoginBtn, LoginBtnProps } from ".";

export default {
  title: "LoginBtn",
  component: LoginBtn,
  args: {
    children: "Vamos lá ",
  },
} as Meta<LoginBtnProps>;

export const Template: Story<LoginBtnProps> = (args) => {
  return (
    <div>
      <LoginBtn {...args} />
    </div>
  );
};
