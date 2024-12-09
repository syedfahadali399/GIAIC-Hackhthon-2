import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },screens: {
      "max-2xl": { max: "1500px"},
      "max-xl": { max: "1280px"},
      "max-lg": { max: "1024px"}
    }
  },
  plugins: [],
} satisfies Config;
