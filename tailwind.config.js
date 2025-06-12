/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neon-green": "#00ff9f",
        "neon-blue": "#00d9ff",
        "neon-pink": "#ff00cc",
        "cyber-bg": "#0f0f1b",
      },
      fontFamily: {
        poiret: ["Poiret One", "sans-serif"],
        majorMono: ["Major Mono Display", "monospace"],
      },
      boxShadow: {
        neonGreen: "0 0 10px #00ff9f, 0 0 20px #00ff9f",
        neonBlue: "0 0 10px #00d9ff, 0 0 20px #00d9ff",
        neonPink: "0 0 10px #ff00cc, 0 0 20px #ff00cc",
      },
      keyframes: {
        typewriter: {
          "0%": { width: "0ch" },
          "100%": { width: "30ch" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "#9ca3af" },
        },
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
        flicker: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.4 },
        },
      },
      animation: {
        typewriter: "typewriter 3.5s steps(30) 1s forwards",
        blink: "blink 1s step-end",
        glitch: "glitch 500ms infinite",
        flicker: "flicker 2s infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".bg-grid-pattern": {
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        },

        ".cyber-glow-purple": {
          backgroundColor: "rgba(168, 85, 247, 0.2)",
          filter: "blur(120px)",
          borderRadius: "9999px",
        },
        ".cyber-glow-blue": {
          backgroundColor: "rgba(56, 189, 248, 0.2)",
          filter: "blur(100px)",
          borderRadius: "9999px",
        },
        ".super-bold": {
          "-webkit-text-stroke": "2.5px",
        },
        ".bold": {
          "-webkit-text-stroke": "1px",
        },
        ".normal": {
          "-webkit-text-stroke": "0.1px",
        },
        ".text-shadow-glow": {
          textShadow:
            "0 0 10px rgba(168, 85, 247, 0.8), 0 0 20px rgba(56, 189, 248, 0.6)",
        },
      });
    },
  ],
};
