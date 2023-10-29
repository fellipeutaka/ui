import { Label } from "@fellipeutaka/ui/label";
import { Select, type SelectProps } from "@fellipeutaka/ui/select";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<SelectProps> = {
  title: "Components/Select",
  component: Select,
  args: {
    disabled: false,
  },
  render(props) {
    return (
      <Select {...props}>
        <Select.Trigger placeholder="Select a fruit" className="w-56" />
        <Select.Content>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="blueberry">Blueberry</Select.Item>
            <Select.Item value="grapes">Grapes</Select.Item>
            <Select.Item value="pineapple">Pineapple</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select>
    );
  },
};

export default meta;

type Story = StoryObj<SelectProps>;

export const Default: Story = {};

export const WithLabel: Story = {
  render(props) {
    return (
      <div className="space-y-2">
        <Label htmlFor="fruit">Fruit</Label>
        <Select {...props}>
          <Select.Trigger
            placeholder="Select a fruit"
            id="fruit"
            className="w-56"
          />
          <Select.Content>
            <Select.Group>
              <Select.Label>Fruits</Select.Label>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="banana">Banana</Select.Item>
              <Select.Item value="blueberry">Blueberry</Select.Item>
              <Select.Item value="grapes">Grapes</Select.Item>
              <Select.Item value="pineapple">Pineapple</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
