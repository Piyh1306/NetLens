/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B1120",
        surface: "#0F172A",
        surface2: "#131C31",
        border: "#1E293B",
        primary: "#2563EB",
        secondary: "#06B6D4",
        accent: "#22C55E",
        danger: "#EF4444",
        muted: "#94A3B8",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(37, 99, 235, 0.35)",
        "glow-green": "0 0 20px rgba(34, 197, 94, 0.35)",
        "glow-cyan": "0 0 20px rgba(6, 182, 212, 0.35)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        scan: "scan 3s linear infinite",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        blink: {
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
