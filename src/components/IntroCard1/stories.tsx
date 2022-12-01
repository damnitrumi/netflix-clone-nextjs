import { Meta, Story } from "@storybook/react/types-6-0";
import { IntroCard1, IntroCard1Props } from ".";

export default {
  title: "IntroCard1",
  component: IntroCard1,
  args: {
    h1Value: "Aproveite na TV.",
    h2Value:
      "Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.",
    imgUrl: "/assets/images/netflix-tv.png",
  },
} as Meta<IntroCard1Props>;

export const Template: Story<IntroCard1Props> = (args) => {
  return (
    <div>
      <IntroCard1 {...args} />
    </div>
  );
};
