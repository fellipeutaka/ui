import { Button } from "@fellipeutaka/ui/button";
import { Dialog } from "@fellipeutaka/ui/dialog";
import { Label } from "@fellipeutaka/ui/label";
import { TextField } from "@fellipeutaka/ui/textfield";
import type { Meta, StoryObj } from "@storybook/react";

type DialogProps = React.ComponentPropsWithoutRef<typeof Dialog>;

const meta: Meta<DialogProps> = {
  title: "Components/Dialog",
  component: Dialog,
  render(props) {
    return (
      <Dialog {...props}>
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
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <TextField.Root className="col-span-3">
                <TextField.Input id="name" defaultValue="Pedro Duarte" />
              </TextField.Root>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <TextField.Root className="col-span-3">
                <TextField.Input id="username" defaultValue="@peduarte" />
              </TextField.Root>
            </div>
          </div>
          <Dialog.Footer>
            <Button>Save changes</Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    );
  },
};

export default meta;

type Story = StoryObj<DialogProps>;

export const Default: Story = {};
