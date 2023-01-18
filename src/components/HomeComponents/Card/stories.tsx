import { Meta, Story } from "@storybook/react/types-6-0";
import { Card, CardProps } from ".";

export default {
  title: "Card",
  component: Card,
  args: {
    posterHorizontal: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    voteAverage: 1.589,
  },
} as Meta<CardProps>;

export const Template: Story<CardProps> = (args) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card {...args} />
    </div>
  );
};
