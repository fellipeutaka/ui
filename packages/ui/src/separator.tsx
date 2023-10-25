import { forwardRef } from "react";

import { cn } from "@fellipeutaka/styles";

export type SeparatorProps = {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
} & React.ComponentPropsWithoutRef<"div">;

export const Separator = forwardRef<React.ElementRef<"div">, SeparatorProps>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) => {
    const semanticProps = decorative
      ? { role: "none" }
      : { "aria-orientation": orientation, role: "separator" };

    return (
      <div
        ref={ref}
        data-orientation={orientation}
        {...semanticProps}
        {...props}
        className={cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
          className,
        )}
        {...props}
      />
    );
  },
);
Separator.displayName = "Separator";
