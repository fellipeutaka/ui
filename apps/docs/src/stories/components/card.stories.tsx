import { Button } from "@fellipeutaka/ui/button";
import { Card, type CardProps } from "@fellipeutaka/ui/card";
import { Label } from "@fellipeutaka/ui/label";
import { Select } from "@fellipeutaka/ui/select";
import { TextField } from "@fellipeutaka/ui/textfield";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<CardProps> = {
  title: "Components/Card",
  component: Card,
  render(props) {
    return (
      <Card {...props} className="w-[22rem]">
        <Card.Header>
          <Card.Title>Create project</Card.Title>
          <Card.Description>
            Deploy your new project in one-click.
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <TextField id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <Select.Trigger placeholder="Select" id="framework" />
                  <Select.Content position="popper">
                    <Select.Item value="next">Next.js</Select.Item>
                    <Select.Item value="sveltekit">SvelteKit</Select.Item>
                    <Select.Item value="astro">Astro</Select.Item>
                    <Select.Item value="nuxt">Nuxt.js</Select.Item>
                  </Select.Content>
                </Select>
              </div>
            </div>
          </form>
        </Card.Content>
        <Card.Footer className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </Card.Footer>
      </Card>
    );
  },
};

export default meta;

type Story = StoryObj<CardProps>;

export const Default: Story = {};
