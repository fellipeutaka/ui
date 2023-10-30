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

const Root = forwardRef<HTMLTableElement, TableProps>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table ref={ref} className={TableStyles.Root({ className })} {...props} />
    </div>
  ),
);
Root.displayName = "Table";

const Header = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={TableStyles.Header({ className })} {...props} />
));
Header.displayName = "Table.Header";

const Body = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={TableStyles.Body({ className })} {...props} />
));
Body.displayName = "Table.Body";

const Footer = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot ref={ref} className={TableStyles.Footer({ className })} {...props} />
));
Footer.displayName = "Table.Footer";

const Row = forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr ref={ref} className={TableStyles.Row({ className })} {...props} />
));
Row.displayName = "Table.Row";

const Head = forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th ref={ref} className={TableStyles.Head({ className })} {...props} />
));
Head.displayName = "Table.Head";

const Cell = forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td ref={ref} className={TableStyles.Cell({ className })} {...props} />
));
Cell.displayName = "Table.Cell";

const Caption = forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={TableStyles.Caption({ className })}
    {...props}
  />
));
Caption.displayName = "Table.Caption";

export const Table = Object.assign(Root, {
  Header,
  Body,
  Footer,
  Row,
  Head,
  Cell,
  Caption,
});
