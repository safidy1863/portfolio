/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"urbanist","Open Sans"', "sans-serif"],
      },
      colors: {
        "blue-dark": "#010A17",
        blue: "#002663",
        yellow: "#FDCA40",
        gray: "#FCFCFC",
      },
      backgroundImage: {
        gradient: "linear-gradient(#D9D9D9,#D9D9D9)",
      },
    },
  },
  plugins: [],
};
