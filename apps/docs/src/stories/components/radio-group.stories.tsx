import { Label } from "@fellipeutaka/ui/label";
import { RadioGroup, type RadioGroupProps } from "@fellipeutaka/ui/radio-group";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<RadioGroupProps> = {
  title: "Components/Radio Group",
  component: RadioGroup,
  render(props) {
    return (
      <RadioGroup {...props} defaultValue="comfortable">
        <div className="flex items-center gap-2">
          <RadioGroup.Item value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroup.Item value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroup.Item value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </RadioGroup>
    );
  },
  args: {
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<RadioGroupProps>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
