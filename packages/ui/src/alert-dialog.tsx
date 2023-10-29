"use client";

import { forwardRef } from "react";

import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { ButtonStyles, type ButtonProps } from "./button";
import { DialogStyles } from "./dialog";

export const AlertDialogStyles = DialogStyles;

const AlertDialogRoot = AlertDialogPrimitive.Root;

AlertDialogRoot.displayName = "AlertDialog";

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

AlertDialogTrigger.displayName = "AlertDialog.Trigger";

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    ref={ref}
    className={AlertDialogStyles.Overlay({ className })}
    {...props}
  />
));
AlertDialogOverlay.displayName = "AlertDialog.Overlay";

const AlertDialogContent = forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={AlertDialogStyles.Content({ className })}
      {...props}
    >
      {children}
    </AlertDialogPrimitive.Content>
  </AlertDialogPortal>
));
AlertDialogContent.displayName = "AlertDialog.Content";

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={AlertDialogStyles.Header({ className })} {...props} />
);
AlertDialogHeader.displayName = "AlertDialog.Header";

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={AlertDialogStyles.Footer({ className })} {...props} />
);
AlertDialogFooter.displayName = "AlertDialog.Footer";

const AlertDialogTitle = forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={AlertDialogStyles.Title({ className })}
    {...props}
  />
));
AlertDialogTitle.displayName = "AlertDialog.Title";

const AlertDialogDescription = forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={AlertDialogStyles.Description({ className })}
    {...props}
  />
));
AlertDialogDescription.displayName = "AlertDialog.Description";

export type AlertDialogActionProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Action
> &
  Pick<ButtonProps, "variant" | "size">;

const AlertDialogAction = forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  AlertDialogActionProps
>(({ className, variant, size, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={ButtonStyles({
      className,
      variant,
      size,
    })}
    {...props}
  />
));
AlertDialogAction.displayName = "AlertDialog.Action";

export type AlertDialogCancelProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Cancel
> &
  Pick<ButtonProps, "size">;

const AlertDialogCancel = forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  AlertDialogCancelProps
>(({ className, size, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={ButtonStyles({
      variant: "outline",
      className: ["mt-2 sm:mt-0", className],
      size,
    })}
    {...props}
  />
));
AlertDialogCancel.displayName = "AlertDialog.Cancel";

export function handleCloseAlertDialog() {
  document.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "Escape",
    }),
  );
}

export const AlertDialog = Object.assign(AlertDialogRoot, {
  Trigger: AlertDialogTrigger,
  Content: AlertDialogContent,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Header: AlertDialogHeader,
  Footer: AlertDialogFooter,
  Action: AlertDialogAction,
  Cancel: AlertDialogCancel,
});
