import { Checkbox, type CheckboxProps } from "@fellipeutaka/ui/checkbox";
import { Label } from "@fellipeutaka/ui/label";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<CheckboxProps> = {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<CheckboxProps>;

export const Default: Story = {};

export const WithLabel: Story = {
  render(props) {
    return (
      <div className="flex items-center gap-2">
        <Checkbox {...props} id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
