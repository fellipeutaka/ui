import { forwardRef } from "react";

import { tv } from "@fellipeutaka/styles";

export const TextareaStyles = tv({
  base: [
    "flex min-h-[5rem] w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background transition",
    "placeholder:text-muted-foreground",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  ],
});

export type TextareaProps = React.ComponentPropsWithoutRef<"textarea">;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={TextareaStyles({ className })}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";
