import { Meta, Story } from "@storybook/react/types-6-0";
import { CarouselTopTen, CarouselTopTenProps } from ".";
import mock from "./mock";

export default {
  title: "CarouselTopTen",
  component: CarouselTopTen,
  args: {
    title: "Popular",
    dataArray: mock,
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
} as Meta<CarouselTopTenProps>;

export const Template: Story<CarouselTopTenProps> = (args) => {
  return (
    <div>
      <CarouselTopTen {...args} />
    </div>
  );
};
