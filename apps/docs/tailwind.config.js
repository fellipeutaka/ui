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
