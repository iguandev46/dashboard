/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // ✅ Enable dark mode via .dark class
  theme: {
    extend: {
      colors: {
        green: "#08e7b7",
      },
      backgroundImage: {
        "green-main": "linear-gradient(to right, #08E7B7, #11CDAD)",
      },
      fontFamily: {
      sans: ["var(--font-roboto)"],
    },
    },
  },
  plugins: [],
};
