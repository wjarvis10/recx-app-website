/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#075056", // Recx deep teal
        ink: "#0b1f1f",
        mist: "#f3f7f7",
        edge: "#dbe7e6",
      },
      boxShadow: { soft: "0 6px 20px rgba(0,0,0,0.08)" },
      borderRadius: { "2xl": "1rem" },
      fontFamily: {
        crimson: ['"Crimson Pro"', "serif"],
      },
    },
  },
  plugins: [],
};
