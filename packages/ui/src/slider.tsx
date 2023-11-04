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
      "block h-5 w-5 rounded-full border-2 border-primary bg-background outline-none ring-offset-2 ring-offset-background transition-all",
      "data-[grabbing=false]:focus-visible:ring-2 data-[grabbing=false]:focus-visible:ring-primary",
      "disabled:pointer-events-none disabled:opacity-50",
      "hover:cursor-grab",
      "data-[grabbing=true]:cursor-grabbing data-[grabbing=true]:border-4",
    ],
  }),
};

export type SliderProps = React.ComponentPropsWithoutRef<
  typeof SliderPrimitive.Root
>;

export const Slider = forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, ...props }, ref) => {
  const value = props.value || props.defaultValue;

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={SliderStyles.Root({ className })}
      {...props}
    >
      <SliderPrimitive.Track className={SliderStyles.Track()}>
        <SliderPrimitive.Range className={SliderStyles.Range()} />
      </SliderPrimitive.Track>
      {value?.map((_, i) => (
        <SliderPrimitive.Thumb
          key={i}
          className={SliderStyles.Thumb()}
          data-grabbing="false"
          onPointerUp={(e) => {
            const thumb = e.target as HTMLSpanElement;
            thumb.setAttribute("data-grabbing", "false");
          }}
          onPointerDown={(e) => {
            const thumb = e.target as HTMLSpanElement;
            thumb.setAttribute("data-grabbing", "true");
          }}
        />
      ))}
    </SliderPrimitive.Root>
  );
});
Slider.displayName = "Slider";
