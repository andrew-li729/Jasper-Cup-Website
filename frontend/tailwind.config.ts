import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightpink: "#ffdcf7", // Add custom colors here
        darkpink: "#ff00b8",
        lightgray: "#2d2b38",
        darkgray: "#1d1a23",
      },
    },
  },
  plugins: [],
} satisfies Config;
