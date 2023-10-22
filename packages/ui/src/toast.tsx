"use client";

import { Toaster as ToasterPrimitive } from "sonner";

export type ToasterProps = React.ComponentProps<typeof ToasterPrimitive>;

export function Toaster({ toastOptions, ...props }: ToasterProps) {
  return (
    <ToasterPrimitive
      position="bottom-right"
      toastOptions={{
        ...toastOptions,
        style: {
          ...toastOptions?.style,
          background: "hsl(var(--background))",
          color: "hsl(var(--foreground))",
          border: "1px solid hsl(var(--border))",
        },
      }}
      {...props}
    />
  );
}

Toaster.displayName = "Toaster";

export { toast } from "sonner";
