import { Meta, Story } from "@storybook/react/types-6-0";
import { Carousel, CarouselProps } from ".";

export default {
  title: "Carousel",
  component: Carousel,
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
