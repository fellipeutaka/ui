import { Button, type ButtonProps } from "@fellipeutaka/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { Plus } from "lucide-react";

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
    },
    size: {
      control: { type: "select" },
      options: ["default", "icon", "lg", "sm"] satisfies ButtonSize[],
    },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  name: "Primary",
  args: {
    variant: "default",
  },
};

export const Secondary: Story = {
  name: "Secondary",
  args: {
    variant: "secondary",
  },
};

export const Outline: Story = {
  name: "Outline",
  args: {
    variant: "outline",
  },
};

export const Link: Story = {
  name: "Link",
  args: {
    variant: "link",
  },
};

export const Ghost: Story = {
  name: "Ghost",
  args: {
    variant: "ghost",
  },
};

export const Destructive: Story = {
  name: "Destructive",
  args: {
    variant: "destructive",
  },
};

export const Icon: Story = {
  name: "Icon",
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
