"use client";

import { forwardRef } from "react";

import { tv } from "@fellipeutaka/styles";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

export const AvatarStyles = {
  Root: tv({
    base: ["relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"],
  }),
  Image: tv({
    base: ["aspect-square h-full w-full"],
  }),
  Fallback: tv({
    base: [
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
    ],
  }),
};

export type AvatarProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Root
>;

export const AvatarRoot = forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={AvatarStyles.Root({ className })}
    {...props}
  />
));
AvatarRoot.displayName = "Avatar";

export type AvatarImageProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Image
>;

export const AvatarImage = forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  AvatarImageProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={AvatarStyles.Image({ className })}
    {...props}
  />
));
AvatarImage.displayName = "Avatar.Image";

export type AvatarFallbackProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Fallback
>;

export const AvatarFallback = forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={AvatarStyles.Fallback({ className })}
    {...props}
  />
));
AvatarFallback.displayName = "Avatar.Fallback";

export const Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
});
