"use client";

import { forwardRef } from "react";

import { Root } from "@radix-ui/react-label";

import { TextStyles } from "./text";

export type LabelProps = React.ComponentPropsWithoutRef<typeof Root> & {
  htmlFor: string;
};

export const Label = forwardRef<React.ElementRef<typeof Root>, LabelProps>(
  ({ className, htmlFor, ...props }, ref) => (
    <Root
      ref={ref}
      className={TextStyles({ className, variant: "label" })}
      htmlFor={htmlFor}
      {...props}
    />
  ),
);
Label.displayName = "Label";
