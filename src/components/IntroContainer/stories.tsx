import { Meta, Story } from "@storybook/react/types-6-0";
import { IntroContainer, IntroContainerProps } from ".";

export default {
  title: "IntroContainer",
  component: IntroContainer,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<IntroContainerProps>;

export const Template: Story<IntroContainerProps> = (args) => {
  return (
    <div>
      <IntroContainer {...args} />
    </div>
  );
};
