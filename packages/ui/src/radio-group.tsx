"use client";

import { forwardRef } from "react";

import { tv } from "@fellipeutaka/styles";
import { Root, Item, Indicator } from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

export const RadioGroupStyles = {
  Root: tv({
    base: ["grid gap-2"],
  }),
  Item: tv({
    base: [
      "peer aspect-square h-4 w-4 rounded-full border border-primary text-primary outline-none ring-offset-background transition",
      "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
    ],
  }),
};

export type RadioGroupProps = React.ComponentPropsWithoutRef<typeof Root>;

export const RadioGroupRoot = forwardRef<
  React.ElementRef<typeof Root>,
  RadioGroupProps
>(({ className, ...props }, ref) => {
  return (
    <Root
      className={RadioGroupStyles.Root({ className })}
      {...props}
      ref={ref}
    />
  );
});
RadioGroupRoot.displayName = "RadioGroup";

export type RadioGroupItemProps = Omit<
  React.ComponentPropsWithoutRef<typeof Item>,
  "children"
>;

export const RadioGroupItem = forwardRef<
  React.ElementRef<typeof Item>,
  RadioGroupItemProps
>(({ className, ...props }, ref) => {
  return (
    <Item ref={ref} className={RadioGroupStyles.Item({ className })} {...props}>
      <Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current animate-in fade-in" />
      </Indicator>
    </Item>
  );
});
RadioGroupItem.displayName = "RadioGroup.Item";

export const RadioGroup = Object.assign(RadioGroupRoot, {
  Item: RadioGroupItem,
});
