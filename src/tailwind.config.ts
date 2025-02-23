
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        border: "rgb(var(--border) / <alpha-value>)",
        neon: {
          green: "rgb(0 255 157 / <alpha-value>)",
          purple: "rgb(157 0 255 / <alpha-value>)",
          blue: "rgb(0 240 255 / <alpha-value>)",
          accessible: {
            primary: "rgb(254 198 161 / <alpha-value>)",    // Soft orange
            secondary: "rgb(211 228 253 / <alpha-value>)",  // Soft blue
            accent: "rgb(254 247 205 / <alpha-value>)"      // Soft yellow
          }
        },
        cyber: {
          dark: "#0A0A0A",
          card: "rgba(16, 16, 16, 0.6)",
          border: "rgba(0, 255, 157, 0.2)"
        }
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "matrix-rain": "matrix 20s linear infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        matrix: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        glow: {
          "0%": { textShadow: "0 0 5px rgba(0, 255, 157, 0.5)" },
          "100%": { textShadow: "0 0 20px rgba(0, 255, 157, 0.8), 0 0 30px rgba(0, 255, 157, 0.6)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(0, 255, 157, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(0, 255, 157, 0.8), 0 0 30px rgba(0, 255, 157, 0.6)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
