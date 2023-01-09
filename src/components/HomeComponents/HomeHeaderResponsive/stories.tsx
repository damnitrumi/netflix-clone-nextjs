import { Meta, Story } from "@storybook/react/types-6-0";
import { HomeHeaderResponsive, HomeHeaderResponsiveProps } from ".";

export default {
  title: "HomeHeaderResponsive",
  component: HomeHeaderResponsive,
} as Meta<HomeHeaderResponsiveProps>;

export const Template: Story<HomeHeaderResponsiveProps> = (args) => {
  return (
    <div>
      <HomeHeaderResponsive {...args} />
    </div>
  );
};
