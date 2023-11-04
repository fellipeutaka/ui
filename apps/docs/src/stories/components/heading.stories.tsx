import { Heading, type HeadingProps } from "@fellipeutaka/ui/heading";
import type { Meta, StoryObj } from "@storybook/react";

type HeadingVariant = Required<HeadingProps["variant"]>;
type HeadingElement = Required<HeadingProps["as"]>;

const meta: Meta<HeadingProps> = {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Heading",
    variant: "h1",
    as: "h1",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"] satisfies HeadingVariant[],
      description: "The variant of the component.",
    },
    as: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"] satisfies HeadingElement[],
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

type Story = StoryObj<HeadingProps>;

export const Default: Story = {};

export const H1: Story = {
  name: "h1",
  args: {
    variant: "h1",
    children: "Taxing Laughter: The Joke Tax Chronicles",
  },
};

export const H2: Story = {
  name: "h2",
  args: {
    variant: "h2",
    children: "The People of the Kingdom",
  },
};

export const H3: Story = {
  name: "h3",
  args: {
    variant: "h3",
    children: "The Joke Tax",
  },
};

export const H4: Story = {
  name: "h4",
  args: {
    variant: "h4",
    children: "People stopped telling jokes",
  },
};

export const H5: Story = {
  name: "h5",
  args: {
    variant: "h5",
    children: "The Joke Tax Chronicles",
  },
};

export const H6: Story = {
  name: "h6",
  args: {
    variant: "h6",
    children: "The Joke Tax Chronicles",
  },
};
