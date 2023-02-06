import { Meta, Story } from "@storybook/react/types-6-0";
import { IntroSubscription } from ".";

export default {
  title: "IntroSubscription",
  component: IntroSubscription,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <IntroSubscription {...args} />
    </div>
  );
};

// Template.parameters = {
//   backgrounds: {
//     values: [
//       { name: "red", value: "#f00" },
//       { name: "green", value: "#0f0" },
//       { name: "blue", value: "#00f" },
//     ],
//   },
// };
