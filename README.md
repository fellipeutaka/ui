# fellipeutaka/ui

## Installation

```bash
pnpm i @fellipeutaka/ui @fellipeutaka/styles lucide-react
```


## Initial configuration
Extend the Design System theme on `tailwind.config.js`.

```js
import { defineTailwindConfig } from "@fellipeutaka/styles";

export default defineTailwindConfig({
  content: ["./src/{app,screens,components}/**/*.{ts,tsx}"],
});
```

Or in CJS

```cjs
const { defineTailwindConfig } = require("@fellipeutaka/styles");

module.exports = defineTailwindConfig({
  content: ["./src/{app,screens,components}/**/*.{ts,tsx}"],
});
```

Import `theme.css` file at your `globals.css`.

```css
/* default theme */
@import "@fellipeutaka/styles/theme.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Great! Everything is ready to use it.

```jsx
import { Button } from "@fellipeutaka/ui/button";

export function App() {
  return <Button>Hello World!</Button>;
}
```


## Customization


Customizing is as simple as changing CSS variables values.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer theme {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 47.4% 11.2%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 47.4% 11.2%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 100% 50%;
    --destructive-foreground: 210 40% 98%;

    --ring: 215 20.2% 65.1%;

    --radius: 0.5rem;
  }

  .dark:root {
    --background: 224 71% 4%;
    --foreground: 213 31% 91%;

    --muted: 223 47% 11%;
    --muted-foreground: 215.4 16.3% 56.9%;

    --accent: 216 34% 17%;
    --accent-foreground: 210 40% 98%;

    --popover: 224 71% 4%;
    --popover-foreground: 215 20.2% 65.1%;

    --border: 216 34% 17%;
    --input: 216 34% 17%;

    --card: 224 71% 4%;
    --card-foreground: 213 31% 91%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 1.2%;

    --secondary: 222.2 47.4% 11.2%;
    --secondary-foreground: 210 40% 98%;

    --destructive: 0 63% 31%;
    --destructive-foreground: 210 40% 98%;

    --ring: 216 34% 17%;

    --radius: 0.5rem;
  }

  body {
    @apply bg-background text-foreground antialiased;
    font-feature-settings:
      "rlig" 1,
      "calt" 1;
  }

  ::-webkit-scrollbar {
    @apply h-1.5 w-1.5;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-foreground/40 rounded-lg transition-colors;
  }

  ::-webkit-scdrollbar-thumb:hover,
  ::-webkit-scrollbar-thumb:active {
    @apply bg-foreground/60;
  }

  :autofill {
    background: none;
  }

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  ::-webkit-color-swatch {
    border: 0;
    border-radius: 0;
  }

  ::-moz-color-swatch,
  ::-moz-focus-inner {
    border: 0;
  }

  ::-moz-focus-inner {
    padding: 0;
  }
}
```
