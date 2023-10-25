import { Badge, type BadgeProps } from "@fellipeutaka/ui/badge";
import type { Meta, StoryObj } from "@storybook/react";

type BadgeVariant = Required<BadgeProps["variant"]>;

const meta: Meta<BadgeProps> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "secondary",
        "outline",
        "destructive",
      ] satisfies BadgeVariant[],
      description: "The variant of the badge.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<BadgeProps>;

export const Default: Story = {
  args: {
    children: "Badge",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
};
