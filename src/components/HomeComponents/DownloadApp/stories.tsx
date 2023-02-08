import { Meta, Story } from "@storybook/react/types-6-0";
import { DownloadApp } from ".";

export default {
  title: "DownloadApp",
  component: DownloadApp,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <DownloadApp {...args} />
    </div>
  );
};
