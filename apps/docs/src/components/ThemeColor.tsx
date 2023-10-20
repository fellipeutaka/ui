import { cn } from "@fellipeutaka/styles";

import { hslToColors } from "~/utils/colors";

type ThemeColorProps = React.ComponentPropsWithoutRef<"div"> & {
  variable: string;
};

function getCSSColor(color: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(
    `--${color}`,
  );
}

export function ThemeColor({ variable, className, ...props }: ThemeColorProps) {
  const cssVariableValue = getCSSColor(variable);

  if (!cssVariableValue) {
    throw new Error(`Variable ${variable} not found`);
  }

  const color = hslToColors(cssVariableValue);

  return (
    <div className={cn("w-full p-8", className)} {...props}>
      <p>{variable}</p>
      <p>{color.hsl}</p>
      <p>{color.hex}</p>
      <p>{color.rgb}</p>
    </div>
  );
}
