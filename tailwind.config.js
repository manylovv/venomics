/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        "main-green": "rgb(113,232,177)",
      },
      backgroundImage: {
        "main-gradient":
          "linear-gradient(90deg, rgba(113,232,177,1) 0%, rgba(106,214,234,1) 100%);",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
