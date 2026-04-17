import type { Config } from "tailwindcss";

const config: Config = {
  // Scan all source files so class names are never purged by mistake
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0d2e9d",
          dark: "#0a2478",
          light: "#1e45c4",
        },
        cream: "#faf7f2",
        warm: "#f3eee6",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(13, 46, 157, 0.12)",
        card: "0 8px 32px -8px rgba(13, 46, 157, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
