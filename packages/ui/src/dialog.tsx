"use client";

import { forwardRef } from "react";

import { tv } from "@fellipeutaka/styles";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export const DialogStyles = {
  Overlay: tv({
    base: [
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm",
      "data-[state=open]:animate-in data-[state=open]:fade-in-0",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
    ],
  }),
  Content: tv({
    base: [
      "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-border bg-background p-6 shadow-lg duration-200",
      "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
      "sm:rounded-lg",
    ],
  }),
  Close: tv({
    base: [
      "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition",
      "hover:opacity-100",
      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "disabled:pointer-events-none",
      "data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
    ],
  }),
  Header: tv({
    base: ["flex flex-col space-y-1.5 text-center", "sm:text-left"],
  }),
  Footer: tv({
    base: ["flex flex-col-reverse", "sm:flex-row sm:justify-end sm:space-x-2"],
  }),
  Title: tv({
    base: ["text-lg font-semibold leading-none tracking-tight"],
  }),
  Description: tv({
    base: ["text-sm text-muted-foreground"],
  }),
};

const DialogRoot = DialogPrimitive.Root;

DialogRoot.displayName = "Dialog";

const DialogTrigger = DialogPrimitive.Trigger;

DialogTrigger.displayName = "Dialog.Trigger";

const DialogPortal = DialogPrimitive.Portal;

export const DialogClose = DialogPrimitive.Close;

DialogClose.displayName = "Dialog.Close";

const DialogOverlay = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={DialogStyles.Overlay({ className })}
    {...props}
  />
));
DialogOverlay.displayName = "Dialog.Overlay";

const DialogContent = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={DialogStyles.Content({ className })}
      {...props}
    >
      {children}
      <DialogPrimitive.Close
        aria-label="Close"
        className={DialogStyles.Close()}
      >
        <X className="h-4 w-4" />
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = "Dialog.Content";

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={DialogStyles.Header({ className })} {...props} />
);
DialogHeader.displayName = "Dialog.Header";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={DialogStyles.Footer({ className })} {...props} />
);
DialogFooter.displayName = "Dialog.Footer";

const DialogTitle = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={DialogStyles.Title({ className })}
    {...props}
  />
));
DialogTitle.displayName = "Dialog.Title";

const DialogDescription = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={DialogStyles.Description({ className })}
    {...props}
  />
));
DialogDescription.displayName = "Dialog.Description";

export function handleCloseDialog() {
  document.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "Escape",
    }),
  );
}

export const Dialog = Object.assign(DialogRoot, {
  Trigger: DialogTrigger,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription,
  Header: DialogHeader,
  Footer: DialogFooter,
});
