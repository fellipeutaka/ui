import { forwardRef } from "react";

import { tv, type VariantProps } from "@fellipeutaka/styles";
import { Slot } from "@radix-ui/react-slot";

export const TextStyles = tv({
  variants: {
    variant: {
      p: ["leading-7 [&:not(:first-child)]:mt-6"],
      blockquote: ["border-l-2 border-border pl-6 italic"],
      label: [
        "text-sm font-medium leading-none",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      ],
      link: [
        "inline-block text-sm text-primary hover:after:w-full",
        "after:block after:h-px after:w-0 after:bg-current after:transition-all after:content-['']",
      ],
    },
  },
});

type TextElement = React.ElementRef<"span">;

type TextAsChildProps = {
  asChild?: boolean;
  as?: never;
} & React.ComponentPropsWithoutRef<"span">;

type TextSpanProps = {
  as?: "span";
  asChild?: never;
} & React.ComponentPropsWithoutRef<"span">;

type TextLabelProps = {
  as: "label";
  asChild?: never;
} & React.ComponentPropsWithoutRef<"label">;

type TextLinkProps = {
  as: "a";
  asChild?: never;
} & React.ComponentPropsWithoutRef<"a">;

type TextPProps = {
  as: "p";
  asChild?: never;
} & React.ComponentPropsWithoutRef<"p">;

export type TextProps = VariantProps<typeof TextStyles> &
  (
    | TextAsChildProps
    | TextSpanProps
    | TextLabelProps
    | TextPProps
    | TextLinkProps
  );

export const Text = Object.assign(
  forwardRef<TextElement, TextProps>(function Text(
    { children, className, asChild = false, as: Tag = "p", variant, ...props },
    ref,
  ) {
    return (
      <Slot {...props} ref={ref} className={TextStyles({ className, variant })}>
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  }),
  {
    displayName: "Text",
  },
);
