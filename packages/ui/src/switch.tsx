"use client";

import { forwardRef } from "react";

import { tv } from "@fellipeutaka/styles";
import { Root, Thumb } from "@radix-ui/react-switch";

export const SwitchStyles = {
  Root: tv({
    base: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
  }),
  Thumb: tv({
    base: "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
  }),
};

export const SwitchRoot = forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
  <Root ref={ref} className={SwitchStyles.Root({ className })} {...props} />
));
SwitchRoot.displayName = "Switch.Root";

export const SwitchThumb = forwardRef<
  React.ElementRef<typeof Thumb>,
  React.ComponentPropsWithoutRef<typeof Thumb>
>(({ className, ...props }, ref) => (
  <Thumb ref={ref} className={SwitchStyles.Thumb({ className })} {...props} />
));
SwitchRoot.displayName = "Switch.Thumb";

export const SwitchComponent = forwardRef<
  React.ElementRef<typeof SwitchRoot>,
  React.ComponentPropsWithoutRef<typeof SwitchRoot>
>((props, ref) => (
  <SwitchRoot ref={ref} {...props}>
    <SwitchThumb />
  </SwitchRoot>
));
SwitchComponent.displayName = "Switch";

export const Switch = Object.assign(SwitchComponent, {
  Root: SwitchRoot,
  Thumb: SwitchThumb,
});

export type { SwitchProps, SwitchThumbProps } from "@radix-ui/react-switch";
