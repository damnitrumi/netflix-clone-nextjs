import { Meta, Story } from "@storybook/react/types-6-0";
import { LinkBtn, LinkBtnProps } from ".";

export default {
  title: "LinkBtn",
  component: LinkBtn,
  args: {
    children: "Testando",
  },
} as Meta<LinkBtnProps>;

export const Template: Story<LinkBtnProps> = (args) => {
  return (
    <div>
      <LinkBtn {...args} />
    </div>
  );
};
