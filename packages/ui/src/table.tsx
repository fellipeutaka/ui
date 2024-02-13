import { forwardRef } from "react";

import { tv } from "@fellipeutaka/styles";

export const TableStyles = {
  Root: tv({
    base: ["w-full caption-bottom text-sm"],
  }),
  Header: tv({
    base: ["[&_tr]:border-b"],
  }),
  Body: tv({
    base: ["[&_tr:last-child]:border-0"],
  }),
  Footer: tv({
    base: ["bg-primary font-medium text-primary-foreground"],
  }),
  Row: tv({
    base: [
      "border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
    ],
  }),
  Head: tv({
    base: [
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
    ],
  }),
  Cell: tv({
    base: ["p-4 align-middle [&:has([role=checkbox])]:pr-0"],
  }),
  Caption: tv({
    base: ["mt-4 text-sm text-muted-foreground"],
  }),
};

export type TableProps = React.ComponentPropsWithoutRef<"table">;

export const TableRoot = forwardRef<HTMLTableElement, TableProps>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table ref={ref} className={TableStyles.Root({ className })} {...props} />
    </div>
  ),
);
TableRoot.displayName = "Table";

export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={TableStyles.Header({ className })} {...props} />
));
TableHeader.displayName = "Table.Header";

export const TableBody = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={TableStyles.Body({ className })} {...props} />
));
TableBody.displayName = "Table.Body";

export const TableFooter = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot ref={ref} className={TableStyles.Footer({ className })} {...props} />
));
TableFooter.displayName = "Table.Footer";

export const TableRow = forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr ref={ref} className={TableStyles.Row({ className })} {...props} />
));
TableRow.displayName = "Table.Row";

export const TableHead = forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th ref={ref} className={TableStyles.Head({ className })} {...props} />
));
TableHead.displayName = "Table.Head";

export const TableCell = forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td ref={ref} className={TableStyles.Cell({ className })} {...props} />
));
TableCell.displayName = "Table.Cell";

export const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={TableStyles.Caption({ className })}
    {...props}
  />
));
TableCaption.displayName = "Table.Caption";

export const Table = Object.assign(TableRoot, {
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Row: TableRow,
  Head: TableHead,
  Cell: TableCell,
  Caption: TableCaption,
});
