import { Meta, Story } from "@storybook/react/types-6-0";
import { Text, TextProps } from ".";

export default {
  title: "Text",
  component: Text,
} as Meta<TextProps>;

export const Template: Story<TextProps> = (args) => {
  return (
    <div>
      <Text {...args} />
    </div>
  );
};
