"use client";

import { forwardRef } from "react";

import { tv } from "@fellipeutaka/styles";
import { Root, Indicator } from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

export type { CheckboxProps } from "@radix-ui/react-checkbox";

export const CheckboxStyles = {
  Root: tv({
    base: [
      "flex aspect-square w-5 appearance-none items-center justify-center rounded-sm border border-input text-primary-foreground shadow outline-none transition",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:border-primary data-[state=checked]:bg-primary",
      "focus-visible:ring-2 focus-visible:ring-input focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    ],
  }),
};

export const Checkbox = forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
  <Root ref={ref} className={CheckboxStyles.Root({ className })} {...props}>
    <Indicator className="flex items-center justify-center text-current">
      <Check className="h-4 w-4" />
    </Indicator>
  </Root>
));
Checkbox.displayName = "Checkbox";
