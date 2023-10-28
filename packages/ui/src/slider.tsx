"use client";

import { forwardRef } from "react";

import { tv } from "@fellipeutaka/styles";
import * as SliderPrimitive from "@radix-ui/react-slider";

export const SliderStyles = {
  Root: tv({
    base: ["relative flex w-full touch-none select-none items-center"],
  }),
  Track: tv({
    base: [
      "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",
    ],
  }),
  Range: tv({
    base: ["absolute h-full bg-primary"],
  }),
  Thumb: tv({
    base: [
      "block h-5 w-5 rounded-full border-2 border-background bg-primary outline-none ring-offset-background transition",
      "focus-visible:ring-2 focus-visible:ring-ring",
      "disabled:pointer-events-none disabled:opacity-50",
    ],
  }),
};

export type SliderProps = React.ComponentPropsWithoutRef<
  typeof SliderPrimitive.Root
>;

export const Slider = forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={SliderStyles.Root({ className })}
    {...props}
  >
    <SliderPrimitive.Track className={SliderStyles.Track()}>
      <SliderPrimitive.Range className={SliderStyles.Range()} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={SliderStyles.Thumb()} />
  </SliderPrimitive.Root>
));
Slider.displayName = "Slider";
