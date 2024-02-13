import { forwardRef } from "react";

import { tv, type VariantProps } from "@fellipeutaka/styles";

export const AlertStyles = {
  Root: tv({
    base: [
      "relative w-full rounded-lg border border-border p-4",
      "[&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
    ],
    variants: {
      variant: {
        default: ["bg-background text-foreground"],
        destructive: [
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }),
  Title: tv({
    base: ["mb-1 font-medium leading-none tracking-tight"],
  }),
  Description: tv({
    base: ["text-sm", "[&_p]:leading-relaxed"],
  }),
};

export const AlertRoot = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<(typeof AlertStyles)["Root"]>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={AlertStyles.Root({ variant, className })}
    {...props}
  />
));
AlertRoot.displayName = "Alert";

export const AlertTitle = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h5 ref={ref} className={AlertStyles.Title({ className })} {...props}>
    {children}
  </h5>
));
AlertTitle.displayName = "AlertTitle";

export const AlertDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={AlertStyles.Description({ className })}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export const Alert = Object.assign(AlertRoot, {
  Title: AlertTitle,
  Description: AlertDescription,
});
