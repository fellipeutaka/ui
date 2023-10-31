"use client";

import { Button } from "@fellipeutaka/ui/button";
import type { Row } from "@fellipeutaka/ui/data-table";
import { DropdownMenu } from "@fellipeutaka/ui/dropdown-menu";
import { MoreHorizontalIcon } from "lucide-react";

import { labels } from "~/data/data";
import { taskSchema } from "~/data/schema";

type DataTableRowActionsProps<TData> = {
  row: Row<TData>;
};

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const task = taskSchema.parse(row.original);

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <MoreHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end" className="w-[160px]">
        <DropdownMenu.Item>Edit</DropdownMenu.Item>
        <DropdownMenu.Item>Make a copy</DropdownMenu.Item>
        <DropdownMenu.Item>Favorite</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>Labels</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.RadioGroup value={task.label}>
              {labels.map((label) => (
                <DropdownMenu.RadioItem key={label.value} value={label.value}>
                  {label.label}
                </DropdownMenu.RadioItem>
              ))}
            </DropdownMenu.RadioGroup>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>
          Delete
          <DropdownMenu.Shortcut>⌘⌫</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
