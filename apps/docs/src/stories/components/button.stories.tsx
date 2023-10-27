import { Plus } from "lucide-react";

import { Button, type ButtonProps } from "@fellipeutaka/ui/button";
import type { Meta, StoryObj } from "@storybook/react";

type ButtonVariant = Required<ButtonProps["variant"]>;

type ButtonSize = Required<ButtonProps["size"]>;

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Hello",
    disabled: false,
    size: "default",
  },
  argTypes: {
    onClick: {
      action: "onClick",
      table: {
        disable: true,
      },
    },
    onFocus: {
      action: "onFocus",
      table: {
        disable: true,
      },
    },
    onMouseOver: {
      action: "onMouseOver",
      table: {
        disable: true,
      },
    },
    type: {
      control: { type: "inline-radio" },
      options: ["button", "submit", "reset"],
      description: "The type of the button.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "button" },
      },
    },
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "destructive",
        "ghost",
        "link",
        "outline",
        "secondary",
      ] satisfies ButtonVariant[],
      description: "The variant of the button.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["default", "icon", "lg", "sm"] satisfies ButtonSize[],
      description: "The size of the button.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    disabled: {
      description: "Whether the button is disabled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

export const Icon: Story = {
  render(props) {
    return (
      <Button {...props}>
        <Plus />
      </Button>
    );
  },
  args: {
    variant: "default",
    size: "icon",
    "aria-label": "Add",
  },
  argTypes: {
    children: {
      control: { type: "none" },
    },
  },
};
