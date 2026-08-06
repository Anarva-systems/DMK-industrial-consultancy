import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060911",
          900: "#0B0F19",
          850: "#0F1626",
          800: "#141D33",
          700: "#1E2A47",
        },
        orange: {
          500: "#FF5500",
          600: "#E04B00",
          700: "#C24100",
        },
        slate: {
          850: "#111827",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "orange-glow": "0 0 25px -5px rgba(255, 85, 0, 0.4)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to right, rgba(11, 15, 25, 0.95) 30%, rgba(11, 15, 25, 0.6) 100%)",
        "orange-gradient": "linear-gradient(135deg, #FF5500 0%, #E04B00 100%)",
        "card-gradient": "linear-gradient(180deg, rgba(20, 29, 51, 0.8) 0%, rgba(15, 22, 38, 0.9) 100%)",
      }
    },
  },
  plugins: [],
};

export default config;
