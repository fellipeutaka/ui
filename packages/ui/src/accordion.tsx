"use client";

import { forwardRef } from "react";

import { tv } from "@fellipeutaka/styles";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export const AccordionStyles = {
  Trigger: tv({
    base: [
      "flex flex-1 items-center justify-between py-4 font-medium outline-none ring-ring transition",
      "hover:underline",
      "[&[data-state=open]>svg]:rotate-180",
      "focus-visible:ring-2",
    ],
  }),
  Content: tv({
    base: [
      "overflow-hidden text-sm transition-all",
      "data-[state=closed]:animate-accordion-up",
      "data-[state=open]:animate-accordion-down",
    ],
  }),
  Item: tv({
    base: ["border-b border-border"],
  }),
};

export const AccordionRoot = AccordionPrimitive.Root;

AccordionRoot.displayName = "Accordion";

export const AccordionItem = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={AccordionStyles.Item({ className })}
    {...props}
  />
));
AccordionItem.displayName = "Accordion.Item";

export const AccordionTrigger = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={AccordionStyles.Trigger({ className })}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "Accordion.Trigger";

export const AccordionContent = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={AccordionStyles.Content({ className })}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "Accordion.Content";

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});
