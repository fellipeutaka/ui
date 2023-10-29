import { AlertDialog } from "@fellipeutaka/ui/alert-dialog";
import { Button } from "@fellipeutaka/ui/button";
import type { Meta, StoryObj } from "@storybook/react";

type AlertDialogProps = React.ComponentPropsWithoutRef<typeof AlertDialog>;

const meta: Meta<AlertDialogProps> = {
  title: "Components/Alert Dialog",
  component: AlertDialog,
  render(props) {
    return (
      <AlertDialog {...props}>
        <AlertDialog.Trigger asChild>
          <Button variant="destructive">Delete profile</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Header>
            <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
            <AlertDialog.Description>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialog.Description>
          </AlertDialog.Header>
          <AlertDialog.Footer>
            <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
            <AlertDialog.Action variant="destructive">
              Continue
            </AlertDialog.Action>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    );
  },
};

export default meta;

type Story = StoryObj<AlertDialogProps>;

export const Default: Story = {};
