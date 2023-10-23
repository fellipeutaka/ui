"use client";

import { forwardRef } from "react";

import { Root } from "@radix-ui/react-label";

import { TextStyles } from "./text";

const Label = forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    className={TextStyles({ className, variant: "label" })}
    {...props}
  />
));
Label.displayName = "Label";

export { Label };
