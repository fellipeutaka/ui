import { Button } from "@fellipeutaka/ui/button";
import { Dialog } from "@fellipeutaka/ui/dialog";
import type { Meta, StoryObj } from "@storybook/react";

type DialogProps = React.ComponentPropsWithoutRef<(typeof Dialog)["Root"]>;

const meta: Meta<DialogProps> = {
  title: "Components/Dialog",
  component: Dialog.Root,
  render(props) {
    return (
      <Dialog.Root {...props}>
        <Dialog.Trigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </Dialog.Trigger>
        <Dialog.Content className="sm:max-w-[425px]">
          <Dialog.Header>
            <Dialog.Title>Edit profile</Dialog.Title>
            <Dialog.Description>
              Make changes to your profile here. Click save when you're done.
            </Dialog.Description>
          </Dialog.Header>
          <Dialog.Footer>
            <Button>Save changes</Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>
    );
  },
};

export default meta;

type Story = StoryObj<DialogProps>;

export const Default: Story = {};
