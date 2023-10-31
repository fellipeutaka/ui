/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

import { Badge } from "@fellipeutaka/ui/badge";
import { Checkbox } from "@fellipeutaka/ui/checkbox";
import {
  DataTable,
  flexRender,
  useReactTable,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  type ColumnDef,
} from "@fellipeutaka/ui/data-table";
import type { Meta, StoryObj } from "@storybook/react";

import { DataTableRowActions } from "~/components/DataTableRowAction";
import { labels, priorities, statuses } from "~/data/data";
import type { Task } from "~/data/schema";
import data from "~/data/tasks.json";

type DataTableProps = React.ComponentPropsWithoutRef<typeof DataTable>;

const meta: Meta<DataTableProps> = {
  title: "Components/Data Table",
  component: DataTable,
  render(props) {
    const columns: ColumnDef<Task>[] = [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
            className="translate-y-[2px]"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            className="translate-y-[2px]"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "id",
        header: ({ column }) => (
          <DataTable.ColumnHeader column={column} title="Task" />
        ),
        cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "title",
        header: ({ column }) => (
          <DataTable.ColumnHeader column={column} title="Title" />
        ),
        cell: ({ row }) => {
          const label = labels.find(
            (label) => label.value === row.original.label,
          );

          return (
            <div className="flex space-x-2">
              {label && <Badge variant="outline">{label.label}</Badge>}
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("title")}
              </span>
            </div>
          );
        },
      },
      {
        accessorKey: "status",
        header: ({ column }) => (
          <DataTable.ColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => {
          const status = statuses.find(
            (status) => status.value === row.getValue("status"),
          );

          if (!status) {
            return null;
          }

          return (
            <div className="flex w-[100px] items-center">
              {status.icon && (
                <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
              )}
              <span>{status.label}</span>
            </div>
          );
        },
        filterFn: (row, id, value) => {
          return value.includes(row.getValue(id));
        },
      },
      {
        accessorKey: "priority",
        header: ({ column }) => (
          <DataTable.ColumnHeader column={column} title="Priority" />
        ),
        cell: ({ row }) => {
          const priority = priorities.find(
            (priority) => priority.value === row.getValue("priority"),
          );

          if (!priority) {
            return null;
          }

          return (
            <div className="flex items-center">
              {priority.icon && (
                <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
              )}
              <span>{priority.label}</span>
            </div>
          );
        },
        filterFn: (row, id, value) => {
          return value.includes(row.getValue(id));
        },
      },
      {
        id: "actions",
        cell: ({ row }) => <DataTableRowActions row={row} />,
      },
    ];

    const [rowSelection, setRowSelection] = useState({});
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
      {},
    );
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = useState<SortingState>([]);

    const table = useReactTable({
      data,
      columns,
      state: {
        sorting,
        columnVisibility,
        rowSelection,
        columnFilters,
      },
      enableRowSelection: true,
      onRowSelectionChange: setRowSelection,
      onSortingChange: setSorting,
      onColumnFiltersChange: setColumnFilters,
      onColumnVisibilityChange: setColumnVisibility,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFacetedRowModel: getFacetedRowModel(),
      getFacetedUniqueValues: getFacetedUniqueValues(),
    });

    return (
      <div className="space-y-4">
        <div className="rounded-md border border-border">
          <DataTable {...props}>
            <DataTable.Header>
              {table.getHeaderGroups().map((headerGroup) => (
                <DataTable.Row key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <DataTable.Head key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </DataTable.Head>
                  ))}
                </DataTable.Row>
              ))}
            </DataTable.Header>
            <DataTable.Body>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <DataTable.Row
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <DataTable.Cell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </DataTable.Cell>
                    ))}
                  </DataTable.Row>
                ))
              ) : (
                <DataTable.Row>
                  <DataTable.Cell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </DataTable.Cell>
                </DataTable.Row>
              )}
            </DataTable.Body>
          </DataTable>
        </div>
        <DataTable.Pagination table={table} />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<DataTableProps>;

export const Default: Story = {};
