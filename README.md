# fellipeutaka/ui

## Installation

Install Design System styles.

```bash
pnpm i @fellipeutaka/styles -D
```

Extend the Design System theme on tailwind.config.js.

```js
import { config } from "@fellipeutaka/styles";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [config],
  content: [
    "node_modules/@fellipeutaka/ui/dist/**/*.js",
    // Your content here
    "./src/{app,screens,components}/**/*.{ts,tsx}",
  ],
  // Rest of your custom TailwindCSS config
};
```

Install Lucide Icons.

```bash
pnpm i lucide-react
```

Import `theme.css` file at your root.

```tsx
// layout.tsx

import { Inter } from "next/font/google";

import "@fellipeutaka/styles/theme.css";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body style={inter.style}>{children}</body>
    </html>
  );
}
```
