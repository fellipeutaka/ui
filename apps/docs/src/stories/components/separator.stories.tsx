import { Separator, type SeparatorProps } from "@fellipeutaka/ui/separator";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<SeparatorProps> = {
  title: "Components/Separator",
  component: Separator,
  render(_props) {
    return (
      <>
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
          <p className="text-sm text-muted-foreground">
            An open-source UI component library.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </>
    );
  },
  argTypes: {
    orientation: {
      description: "The orientation of the separator.",
      table: {
        type: { summary: "string" },
      },
      control: {
        disable: true,
      },
    },
    decorative: {
      description: "Whether the separator is purely decorative.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
      control: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<SeparatorProps>;

export const Default: Story = {};
