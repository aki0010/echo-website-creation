
import type { Config } from "tailwindcss"

export default {
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
          green: "#00FFC4",
          purple: "#C894FF",
          blue: "#C1D9EE"
        },
        cyber: {
          dark: "#0A0E17",
          darker: "#0F1923",
          card: "rgba(15, 25, 35, 0.7)",
          border: "rgba(0, 255, 196, 0.2)",
          text: {
            primary: "#E0F2FF",
            secondary: "#8BA3B8"
          }
        }
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "matrix-rain": "rain 20s linear infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        rain: {
          "0%": { transform: "translateY(-100px)" },
          "100%": { transform: "translateY(calc(100vh + 200px))" },
        },
        glow: {
          "0%": { textShadow: "0 0 5px rgba(0, 255, 196, 0.5)" },
          "100%": { textShadow: "0 0 20px rgba(0, 255, 196, 0.8), 0 0 30px rgba(0, 255, 196, 0.6)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(0, 255, 196, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(0, 255, 196, 0.8), 0 0 30px rgba(0, 255, 196, 0.6)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
