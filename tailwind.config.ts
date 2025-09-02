import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#0a0a0a",
        autumnYellow: "#FFA500", // Added autumn yellow
        hoverColor1: "#FFD700", // Gold
        hoverColor2: "#00CED1", // Dark Turquoise
        hoverColor3: "#FF6347", // Tomato
        instagram: "#E4405F",
        facebook: "#1877F2",
        linkedin: "#0A66C2",
      },
      backgroundImage: {
          "gradient-1": "linear-gradient(to right, #004d40, #00251a)",
          "gradient-2": "linear-gradient(to right, #ffab40, #ff6d00)",
          "gradient-3": "linear-gradient(to right, #e0e0e0, #9e9e9e)",

          "gradient-blue": "linear-gradient(to right, #1e3a8a, #1e40af)",
          "gradient-green": "linear-gradient(to right, #047857, #059669)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config

export default config