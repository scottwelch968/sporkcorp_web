import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      maxWidth: { container: "72rem" },
      boxShadow: {
        1: "0 1px 2px rgba(0,0,0,.06)",
        2: "0 10px 30px rgba(0,0,0,.08)"
      },
      borderRadius: { sm:"10px", md:"14px", lg:"18px", pill:"999px" },
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        fog: "rgb(var(--fog) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        panel: "rgb(var(--panel) / <alpha-value>)",
        brand: "rgb(var(--brand) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)"
      }
    }
  },
  plugins: []
};

export default config;
