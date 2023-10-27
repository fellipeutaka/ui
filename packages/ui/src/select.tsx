"use client";

import { forwardRef } from "react";

import { tv } from "@fellipeutaka/styles";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { Text } from "./text";

export const SelectStyles = {
  Trigger: tv({
    base: "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring group flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  }),
  Content: tv({
    base: "border-border bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 min-w-[8rem] overflow-hidden rounded-md border shadow-md",
    variants: {
      popper: {
        true: "max-h-[var(--radix-select-content-available-height)] data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      },
    },
  }),
  Viewport: tv({
    base: "p-1",
    variants: {
      popper: {
        true: "h-[var(--radix-popper-available-height)] w-full min-w-[var(--radix-popper-anchor-width)]",
      },
    },
  }),
  Label: tv({
    base: "py-1.5 pl-8 pr-2 text-sm font-semibold",
  }),
  Item: tv({
    base: "focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  }),
  Separator: tv({
    base: "bg-muted -mx-1 my-1 h-px",
  }),
  ScrollButton: tv({
    base: "flex h-6 items-center justify-center",
  }),
};

export type SelectGroupProps = SelectPrimitive.SelectGroupProps;
const SelectGroup = SelectPrimitive.Group;

export type SelectValueProps = SelectPrimitive.SelectValueProps;
const SelectValue = SelectPrimitive.Value;

export type SelectTriggerProps = Omit<
  SelectPrimitive.SelectTriggerProps,
  "children"
> & {
  placeholder: string;
};

const SelectTrigger = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, placeholder, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={SelectStyles.Trigger({ className })}
    {...props}
  >
    <SelectValue
      placeholder={<Text className="text-muted-foreground">{placeholder}</Text>}
    />
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50 transition-transform duration-200 group-aria-expanded:rotate-180" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

export type SelectContentProps = SelectPrimitive.SelectContentProps;

const SelectContent = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={SelectStyles.Content({
        className,
        popper: position === "popper",
      })}
      position={position}
      {...props}
    >
      <SelectPrimitive.ScrollUpButton className={SelectStyles.ScrollButton()}>
        <ChevronUp className="h-4 w-4" />
      </SelectPrimitive.ScrollUpButton>
      <SelectPrimitive.Viewport
        className={SelectStyles.Viewport({ popper: position === "popper" })}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectPrimitive.ScrollDownButton className={SelectStyles.ScrollButton()}>
        <ChevronDown className="h-4 w-4" />
      </SelectPrimitive.ScrollDownButton>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

export type SelectLabelProps = SelectPrimitive.SelectLabelProps;

const SelectLabel = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={SelectStyles.Label({ className })}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

export type SelectItemProps = SelectPrimitive.SelectItemProps;

const SelectItem = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={SelectStyles.Item({ className })}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

export type SelectSeparatorProps = SelectPrimitive.SelectSeparatorProps;

const SelectSeparator = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={SelectStyles.Separator({ className })}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export type SelectProps = SelectPrimitive.SelectProps;

export const Select = Object.assign(SelectPrimitive.Root, {
  Root: SelectPrimitive.Root,
  Group: SelectGroup,
  Value: SelectValue,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Label: SelectLabel,
  Item: SelectItem,
  Separator: SelectSeparator,
});

export {
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
