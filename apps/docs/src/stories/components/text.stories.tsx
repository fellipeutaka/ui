import { Text, type TextProps } from "@fellipeutaka/ui/text";
import type { Meta, StoryObj } from "@storybook/react";

type TextVariant = Required<TextProps["variant"]>;
type TextElement = Required<TextProps["as"]>;

const meta: Meta<TextProps> = {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Text",
    variant: "p",
    as: "p",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["blockquote", "label", "p"] satisfies TextVariant[],
    },
    as: {
      control: { type: "select" },
      options: ["span", "label", "p"] satisfies TextElement[],
      description: "The HTML element to use for the component.",
      table: {
        type: "string",
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<TextProps>;

export const Default: Story = {};
