/* eslint-disable no-undef */
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
        "blue-opacity": "#020F21",
        blue: "#002663",
        yellow: "#FDCA40",
        gray: "#FCFCFC",
      },
      backgroundImage: {
        gradient: "linear-gradient(#D9D9D9,#D9D9D9)",
      },
      screens: {
        smartphone: "481px",
        tablet: "577px",
        laptop: "769px",
        desktop: "1025px",
        "large-width": "1441px",
        "extra-width": "1991px",
      },
    },
  },
  daiysyui: {
    themes : ["light", "dark"]
  },
  plugins: [require("daisyui")],
};
