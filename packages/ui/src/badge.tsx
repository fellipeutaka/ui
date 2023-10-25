import { forwardRef } from "react";

import { tv, type VariantProps } from "@fellipeutaka/styles";

export const BadgeStyles = tv({
  base: "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  variants: {
    variant: {
      default:
        "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
      secondary:
        "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive:
        "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
      outline: "text-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type BadgeProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof BadgeStyles>;

export const Badge = forwardRef<React.ElementRef<"div">, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={BadgeStyles({ variant, className })}
        {...props}
      />
    );
  },
);
Badge.displayName = "Badge";
