import { Accordion } from "@fellipeutaka/ui/accordion";
import type { Meta, StoryObj } from "@storybook/react";

type AlertDialogProps = React.ComponentPropsWithoutRef<typeof Accordion>;

const meta: Meta<AlertDialogProps> = {
  title: "Components/Accordion",
  component: Accordion,
  args: {
    type: "single",
    collapsible: false,
  },
  argTypes: {
    type: {
      control: {
        type: "inline-radio",
      },
      options: ["single", "multiple"],
      description: "The type of accordion.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "single" },
      },
    },
    collapsible: {
      description: "Whether or not the accordion can be collapsed.",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
  },
  render(props) {
    return (
      <Accordion {...props} className="w-full">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
          <Accordion.Content>
            Yes. It adheres to the WAI-ARIA design pattern.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Is it styled?</Accordion.Trigger>
          <Accordion.Content>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Trigger>Is it animated?</Accordion.Trigger>
          <Accordion.Content>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export default meta;

type Story = StoryObj<AlertDialogProps>;

export const Default: Story = {};
