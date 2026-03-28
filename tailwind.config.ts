import type { Config } from "tailwindcss";

const config: Config = {
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
        primary: {
          DEFAULT: "#13a4ec",
          muted: "rgba(19, 164, 236, 0.15)",
        },
        border: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        syne: ["var(--font-syne)"],
        mono: ["var(--font-ibm-plex-mono)"],
      },
      animation: {
        "glitch-1": "glitch1 2.5s infinite linear alternate-reverse",
        "glitch-2": "glitch2 2.5s infinite linear alternate-reverse",
        "scanline": "scanline 8s linear infinite",
      },
      keyframes: {
        glitch1: {
          "0%": { clipPath: "inset(20% 0 30% 0)" },
          "100%": { clipPath: "inset(10% 0 40% 0)" },
        },
        glitch2: {
          "0%": { clipPath: "inset(40% 0 10% 0)" },
          "100%": { clipPath: "inset(30% 0 20% 0)" },
        },
        scanline: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
