import { Meta, Story } from "@storybook/react/types-6-0";
import { ModalOpened, ModalOpenedProps } from ".";

export default {
  title: "ModalOpened",
  component: ModalOpened,
} as Meta<ModalOpenedProps>;

export const Template: Story<ModalOpenedProps> = () => {
  return (
    <div>
      <ModalOpened />
    </div>
  );
};
