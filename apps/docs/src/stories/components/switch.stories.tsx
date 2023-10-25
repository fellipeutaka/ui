import { Label } from "@fellipeutaka/ui/label";
import { Switch, type SwitchProps } from "@fellipeutaka/ui/switch";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<SwitchProps> = {
  title: "Components/Switch",
  component: Switch,
  args: {
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<SwitchProps>;

export const Default: Story = {};

export const WithLabel: Story = {
  render(props) {
    return (
      <div className="flex items-center gap-2">
        <Switch {...props} id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
