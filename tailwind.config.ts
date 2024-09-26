import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        "inter-italic": ["var(--font-inter-italic)"],
      },
    },
  },
  plugins: [],
};

export default config;
