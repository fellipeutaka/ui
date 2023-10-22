import { Button } from "@fellipeutaka/ui/button";
import { Toaster, toast, type ToasterProps } from "@fellipeutaka/ui/toast";
import type { Meta, StoryObj } from "@storybook/react";

type ToasterStoryProps = ToasterProps & {
  message: string;
};

const meta: Meta<ToasterStoryProps> = {
  title: "Components/Toast",
  component: Toaster,
};

export default meta;

type Story = StoryObj<ToasterStoryProps>;

export const Default: Story = {
  render({ message, ...props }) {
    return (
      <>
        <Toaster {...props} />
        <Button
          onClick={() => {
            toast(message);
          }}
        >
          Show toast
        </Button>
      </>
    );
  },
  args: {
    message: "Hello world!",
  },
};

export const Success: Story = {
  render({ message, ...props }) {
    return (
      <>
        <Toaster {...props} />
        <Button
          onClick={() => {
            toast.success(message);
          }}
        >
          Show toast
        </Button>
      </>
    );
  },
  args: {
    message: "Success!",
  },
};

export const Error: Story = {
  render({ message, ...props }) {
    return (
      <>
        <Toaster {...props} />
        <Button
          onClick={() => {
            toast.error(message);
          }}
        >
          Show toast
        </Button>
      </>
    );
  },
  args: {
    message: "Error!",
  },
};

export const PromiseToast: Story = {
  name: "Promise",
  render({ ...props }) {
    const promise = () =>
      new Promise<string>((resolve, reject) => {
        setTimeout(() => {
          const random = Math.random();
          if (random > 0.5) {
            return reject("Error");
          }
          resolve("Hello");
        }, 2000);
      });

    return (
      <>
        <Toaster {...props} />
        <Button
          onClick={() => {
            toast.promise(promise, {
              loading: "Loading...",
              success: (data) => {
                return `${data} world!`;
              },
              error: "Error",
            });
          }}
        >
          Show toast
        </Button>
      </>
    );
  },
};
