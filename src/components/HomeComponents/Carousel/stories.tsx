import { Meta, Story } from "@storybook/react/types-6-0";
import { Carousel, CarouselProps } from ".";
import mock from "./mock";

export default {
  title: "Carousel",
  component: Carousel,
  args: {
    title: "Popular",
    dataArray: mock,
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
} as Meta<CarouselProps>;

export const Template: Story<CarouselProps> = (args) => {
  return (
    <div>
      <Carousel {...args} />
    </div>
  );
};
