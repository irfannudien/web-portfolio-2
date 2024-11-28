/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poiret: ["Poiret One", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".bg-grid-pattern": {
          backgroundImage:
            "linear-gradient(to right, rgba(64,64,64,.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(64,64,64,.2) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        },
        ".super-bold": {
          "-webkit-text-stroke": "2.5px black",
        },
      });
    },
  ],
};
