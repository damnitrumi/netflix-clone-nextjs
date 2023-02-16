import { Meta, Story } from "@storybook/react/types-6-0";
import { WatchVideo, WatchVideoProps } from "./WatchVideo";

export default {
  title: "WatchVideo",
  component: WatchVideo,
} as Meta<WatchVideoProps>;

export const Template: Story<WatchVideoProps> = (args) => {
  return (
    <div>
      <WatchVideo {...args} />
    </div>
  );
};
